//works! yay

export function applyOutlineEffect(raycaster, outlinePairs, outlinePass, navigationMeshes, hoveredMesh, outlinedMeshes, defaultOutlines) {
    const intersects = raycaster.current.intersectObjects(outlinedMeshes);

    if (intersects.length > 0) {
        const intersectedObject = intersects[0].object;

        if (hoveredMesh.current !== intersectedObject) {
            outlinePass.selectedObjects = [intersectedObject];

            const additionalMeshes = outlinePairs[intersectedObject.name];

            if (additionalMeshes) {
                additionalMeshes.forEach(meshName => {
                    if (navigationMeshes[meshName]) { // Check if the mesh exists
                        outlinePass.selectedObjects.push(navigationMeshes[meshName]);
                    }
                });
            }


            hoveredMesh.current = intersectedObject;
        }
    } else {
        outlinePass.selectedObjects = defaultOutlines.filter(obj => obj !== undefined); // Filter out undefined objects
        hoveredMesh.current = null;
    }
}
