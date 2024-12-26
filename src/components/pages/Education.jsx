import React from 'react';
import { motion } from 'framer-motion'; // Import Framer Motion
import '../../index.css'; // Import Tailwind CSS file
import { Barcode } from "lucide-react";

//import images
import '/images/papertexture.jpg';
import '/images/education-mmhs.jpg';
import '/images/education-mmhs-logo.jpg';
import '/images/education-wlu-logo.jpg';
import '/images/education-wlu.jpg';
import '/images/education-uw-logo.png';
import '/images/education-uw.png';

function EducationModal() {
    //card information
    const students = [
        {
            name: "Rachel Wei",
            school: "University of Waterloo",
            id: "21120000",
            image: '/images/education-uw.png',
            schoollogo: '/images/education-uw-logo.png',
            description: "Bachelor's of Computer Science.",
            graduationYear: "2024-Present"
        },
        {
            name: "Rachel Wei",
            school: "Wilfrid Laurier University",
            id: "16910000",
            image: '/images/education-wlu.jpg',
            schoollogo: '/images/education-wlu-logo.jpg',
            description: "Bachelor's of Business Administration.",
            graduationYear: "2024-Present"
        },
        {
            name: "Rachel Wei",
            school: "Milliken Mills H.S",
            id: "348629841",
            image: '/images/education-mmhs.jpg',
            schoollogo: '/images/education-mmhs-logo.jpg',
            description: "OSSD: 98.6% CS Average | IB Diploma Programme Score: 42/45",
            graduationYear: "2020-2024"
        }
    ];

    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1, }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
            className="max-[600px]:max-h-[77vh] flex justify-center items-center bg-transparent"
        >
            <div className="max-[800px]:max-h-[58vh] 
            landscape:max-w-[50vw] landscape:md:mt-[0vh] 
            md:max-h-[83vh] lg:w-[33vw] lg:max-h-[70vh]  overflow-x-hidden overflow-y-auto pr-2 scrollbar-thin scrollbar-thumb-[#837b69] scrollbar-track-transparent">
                {students.map((student, index) => (
                    <div key={index} className="  bg-[url('/images/papertexture.jpg')] bg-cover bg-center rounded-xl shadow-lg mb-3 ">
                        <div className=" pt-6 pb-8 pl-6 pr-6 flex">
                            <div className="max-w-20 mr-3 mt-2.5 flex-shrink-0">
                                <div className="shadow-md rounded-lg overflow-hidden ">
                                    <img
                                        src={student.image}
                                        alt={student.name}
                                        className="w-full h-full object-cover pointer-events-none"
                                    />
                                </div>
                            </div>
                            <div className="flex-grow flex flex-col justify-between">
                                <div>
                                    <div className="flex justify-between items-start mb-1">
                                        <div>
                                            <h2 className="text-xl text-[#393229]  font-bold">{student.name}</h2>
                                            <p className="text-sm text-[#52483b]">{student.school}</p>
                                        </div>
                                        <div className="flex items-center">
                                            <img
                                                src={student.schoollogo}
                                                alt={student.school}
                                                className="w-12 rounded-full flex items-center justify-center pointer-events-none"
                                            />
                                        </div>
                                    </div>
                                    <p className="text-sm text-[#52483b] tracking-tight">{student.description}</p>
                                    <p className="text-sm text-[#52483b] tracking-tight ">School Year: {student.graduationYear}</p>
                                </div>
                                <div>
                                    <div className="flex items-center mb-1 mt-2 ">
                                        <Barcode className="w-6 h-6 text-[#393229] mr-2" />
                                        <span className="text-[14px] font-mono text-[#393229]">Student ID {student.id}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </motion.div>
    );
}

export default EducationModal;
