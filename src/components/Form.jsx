import React from "react";

const Form = () => {
    return (
        <div>
            <div className="">
                <form className="bg-gradient-to-br from-[rgba(76,75,82,1)] to-[rgba(22,18,29,1)] shadow-md rounded px-8 pt-6 pb-8 mb-4 border-2">
                    <div className="mb-4">
                        <label className="block text-white text-[20px] font-bold mb-2" htmlFor="">
                            Nama Lengkap
                        </label>
                        <input className="shadow appearance-none border rounded w-full py-2 px-3 text-black leading-tight focus:outline-none focus:shadow-outline" id="" type="text" placeholder="Masukan nama lengkap disini" />
                    </div>
                    <div className="mb-4">
                        <label className="block text-white text-[20px] font-bold mb-2" htmlFor="">
                            Jenis Kelamin
                        </label>
                        <div className="inline-block relative w-full">
                            <select className="shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline text-black">
                                <option disabled defaultValue>Pilih Jenis kelamin</option>
                                <option>Laki laki</option>
                                <option>Perempuan</option>
                            </select>
                            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-black">
                                <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
                            </div>
                        </div>
                    </div>
                    <div className="mb-4">
                        <label className="block text-white text-[20px] font-bold mb-2" htmlFor="">
                            Email
                        </label>
                        <input className="shadow appearance-none border rounded w-full py-2 px-3 text-black leading-tight focus:outline-none focus:shadow-outline" id="" type="email" placeholder="cth: example@gmail.com" />
                    </div>
                    <div className="mb-4">
                        <label className="block text-white text-[20px] font-bold mb-2" htmlFor="">
                            Nomor WhatsApp
                        </label>
                        <input className="shadow appearance-none border rounded w-full py-2 px-3 text-black leading-tight focus:outline-none focus:shadow-outline" id="" type="text" placeholder="cth: 08123456789" />
                    </div>
                    <div className="mb-4">
                        <label className="block text-white text-[20px] font-bold mb-2" htmlFor="">
                            Institusi
                        </label>
                        <input className="shadow appearance-none border rounded w-full py-2 px-3 text-black leading-tight focus:outline-none focus:shadow-outline" id="" type="text" placeholder="Masukan asal institusi disini" />
                    </div>
                    <div className="mb-4">
                        <label className="block text-white text-[20px] font-bold mb-2" htmlFor="">
                            Division
                        </label>
                        <div className="inline-block relative w-full">
                            <select className="shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline text-black">
                                <option disabled defaultValue>Pilih divisi</option>
                                <option>Divisi 1</option>
                                <option>Divisi 2</option>
                            </select>
                            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-black">
                                <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
                            </div>
                        </div>
                    </div>
                    
                    <div className="flex items-center justify-between pt-8">
                    <button className="bg-gradient-to-r from-[#5334B1] to-[#401881] md:px-5 md:py-3 p-5 md:flex justify-center text-white rounded-lg w-full" type="button">
                        Kirim data pendaftaran
                    </button>
                    
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Form;