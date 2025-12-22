'use client';

import React, { useState } from 'react';
import { BookOpen, User, Building, MapPin, Phone, Camera, ArrowLeft } from 'lucide-react';
import Link from 'next/link';

export default function RegistrationPage() {
    const [formData, setFormData] = useState({
        name: '',
        institution: '',
        place: '',
        mobile: '',
        photo: null as File | null,
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files[0]) {
            setFormData((prev) => ({
                ...prev,
                photo: e.target.files![0],
            }));
        }
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log('Form Submitted:', formData);
        alert('ನೋಂದಣಿ ಯಶಸ್ವಿಯಾಗಿದೆ (Registration Successful)!');
    };

    return (
        <div className="min-h-screen bg-[#fffbf0] dark:bg-gray-950 text-gray-800 dark:text-gray-100 font-sans transition-colors duration-300">
            {/* Navigation */}
            <nav className="sticky top-0 z-40 bg-white/90 dark:bg-gray-900/90 backdrop-blur-md shadow-sm border-b border-amber-100 dark:border-gray-800">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between items-center h-16">
                        <Link href="/" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
                            <BookOpen className="text-amber-700 dark:text-amber-500" />
                            <span className="text-xl font-bold text-amber-700 dark:text-amber-500">ಮಲಬಾರ್ ಸಂಗಮ</span>
                        </Link>
                        <Link
                            href="/"
                            className="flex items-center gap-2 text-sm font-medium text-amber-700 dark:text-amber-500 hover:text-amber-800 dark:hover:text-amber-400"
                        >
                            <ArrowLeft size={16} />
                            ಹಿಂದಕ್ಕೆ (Back)
                        </Link>
                    </div>
                </div>
            </nav>

            {/* Main Content */}
            <div className="max-w-2xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
                <div className="bg-white dark:bg-gray-900 rounded-3xl shadow-xl border border-amber-100 dark:border-gray-800 overflow-hidden">

                    {/* Header */}
                    <div className="bg-amber-700 dark:bg-gray-800 p-8 text-center">
                        <h1 className="text-2xl md:text-3xl font-bold text-white mb-2">ಮಲಬಾರ್ ಕನ್ನಡ ಸಂಗಮ</h1>
                        <p className="text-amber-100 dark:text-gray-400 text-lg">ನೋಂದಣಿ ಫಾರಂ (Registration Form)</p>
                    </div>

                    {/* Form */}
                    <form onSubmit={handleSubmit} className="p-8 space-y-6">

                        {/* Name Field */}
                        <div>
                            <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                                1. ವಿದ್ಯಾರ್ಥಿಯ ಹೆಸರು (Student Name) <span className="text-red-500">*</span>
                            </label>
                            <div className="relative">
                                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                    <User className="h-5 w-5 text-gray-400" />
                                </div>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    required
                                    value={formData.name}
                                    onChange={handleChange}
                                    className="block w-full pl-10 pr-3 py-3 border border-gray-300 dark:border-gray-700 rounded-xl bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all"
                                    placeholder="ನಿಮ್ಮ ಹೆಸರನ್ನು ನಮೂದಿಸಿ"
                                />
                            </div>
                        </div>

                        {/* Institution Field */}
                        <div>
                            <label htmlFor="institution" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                                2. ಕಲಿಯುತ್ತಿರುವ ಸಂಸ್ಥೆ (Studying Institution) <span className="text-red-500">*</span>
                            </label>
                            <div className="relative">
                                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                    <Building className="h-5 w-5 text-gray-400" />
                                </div>
                                <input
                                    type="text"
                                    id="institution"
                                    name="institution"
                                    required
                                    value={formData.institution}
                                    onChange={handleChange}
                                    className="block w-full pl-10 pr-3 py-3 border border-gray-300 dark:border-gray-700 rounded-xl bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all"
                                    placeholder="ಸಂಸ್ಥೆಯ ಹೆಸರು"
                                />
                            </div>
                        </div>

                        {/* Place Field */}
                        <div>
                            <label htmlFor="place" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                                3. ವಾಸವಿರುವ ಸ್ಥಳ (Place of Residence) <span className="text-red-500">*</span>
                            </label>
                            <div className="relative">
                                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                    <MapPin className="h-5 w-5 text-gray-400" />
                                </div>
                                <input
                                    type="text"
                                    id="place"
                                    name="place"
                                    required
                                    value={formData.place}
                                    onChange={handleChange}
                                    className="block w-full pl-10 pr-3 py-3 border border-gray-300 dark:border-gray-700 rounded-xl bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all"
                                    placeholder="ಊರು / ಸ್ಥಳ"
                                />
                            </div>
                        </div>

                        {/* Mobile Field */}
                        <div>
                            <label htmlFor="mobile" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                                4. ಮೊಬೈಲ್ ಸಂಖ್ಯೆ (Mobile Number) <span className="text-red-500">*</span>
                            </label>
                            <div className="relative">
                                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                    <Phone className="h-5 w-5 text-gray-400" />
                                </div>
                                <input
                                    type="tel"
                                    id="mobile"
                                    name="mobile"
                                    required
                                    value={formData.mobile}
                                    onChange={handleChange}
                                    className="block w-full pl-10 pr-3 py-3 border border-gray-300 dark:border-gray-700 rounded-xl bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all"
                                    placeholder="ಮೊಬೈಲ್ ಸಂಖ್ಯೆ"
                                />
                            </div>
                        </div>

                        {/* Photo Field */}
                        <div>
                            <label htmlFor="photo" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                                5. ಫೋಟೋ (Photo) <span className="text-red-500">*</span>
                            </label>
                            <div className="relative border-2 border-dashed border-gray-300 dark:border-gray-700 rounded-xl p-6 flex flex-col items-center justify-center text-center hover:border-amber-500 dark:hover:border-amber-500 transition-colors bg-gray-50 dark:bg-gray-800">
                                <Camera className="h-8 w-8 text-gray-400 mb-2" />
                                <div className="text-sm text-gray-600 dark:text-gray-400">
                                    <label htmlFor="photo-upload" className="relative cursor-pointer bg-white dark:bg-gray-700 rounded-md font-medium text-amber-600 hover:text-amber-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-amber-500 px-2 py-1">
                                        <span>Upload a file</span>
                                        <input id="photo-upload" name="photo" type="file" className="sr-only" accept="image/*" onChange={handleFileChange} required />
                                    </label>
                                    <p className="pl-1">or drag and drop</p>
                                </div>
                                <p className="text-xs text-gray-500 dark:text-gray-500 mt-1">PNG, JPG up to 5MB</p>
                                {formData.photo && (
                                    <p className="mt-2 text-sm text-green-600 font-medium">
                                        Selected: {formData.photo.name}
                                    </p>
                                )}
                            </div>
                        </div>

                        {/* Submit Button */}
                        <div className="pt-4">
                            <button
                                type="submit"
                                className="w-full flex justify-center py-3.5 px-4 border border-transparent rounded-xl shadow-sm text-sm font-medium text-white bg-amber-700 hover:bg-amber-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-amber-500 transition-all transform hover:-translate-y-0.5"
                            >
                                ನೋಂದಾಯಿಸಿ (Register Now)
                            </button>
                        </div>

                    </form>
                </div>
            </div>

        </div>
    );
}
