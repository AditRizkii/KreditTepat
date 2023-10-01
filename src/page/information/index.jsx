import React from "react";

import { Form, Navbar } from "../../components";
import styles from "../../style";

const index = () => {
  return (
    // <div className="w-full h-full items-center justify-center flex-col gap-3 flex ">
    //   <div className="h-[250px] w-full p-6 ">
    //     <div className="h-full w-full rounded-md bg-slate-400 flex gap-3 flex-row p-4 ">
    //       <div className="w-full h-full "></div>
    //       <div className="w-full h-full "></div>
    //     </div>
    //   </div>

    //   <div className="w-full  h-[800px] flex flex-col gap-1 pl-12 ">
    //     <div className="w-80 h-auto p-1 flex flex-col gap-1 rounded-sm">
    //       <label htmlFor="" className="text-[10px] font-poppins">
    //         Berapa Umur anda
    //       </label>
    //       <input
    //         type="text"
    //         placeholder="Tahun"
    //         className="placeholder:text-xs placeholder:flex text-xs rounded-sm h-auto py-1 border border-black focus:outline-none px-1"
    //       />
    //     </div>
    //     <div className="max-w-[260px]  h-auto p-1 flex-col gap-1 flex rounded-sm ">
    //       <label htmlFor="" className="text-[10px] font-poppins">
    //         Sedang bekerja atau tidak?
    //       </label>
    //       <input
    //         type="text"
    //         placeholder="PNS/Swasta"
    //         className="w-[250px] placeholder:text-xs placeholder:flex text-xs rounded-sm h-auto py-1 border border-black focus:outline-none px-1"
    //       />
    //     </div>
    //     <div className="max-w-[260px]  h-auto p-1 flex-col gap-1 flex rounded-sm ">
    //       <label htmlFor="" className="text-[10px] font-poppins">
    //         Berapa penedapatan Anda
    //       </label>
    //       <input
    //         type="text"
    //         placeholder="Rp."
    //         className="w-[250px] placeholder:text-xs placeholder:flex text-xs rounded-sm h-auto py-1 border border-black focus:outline-none px-1"
    //       />
    //     </div>
    //     <div className="max-w-[260px]  h-auto p-1 flex-col gap-1 flex rounded-sm ">
    //       <label htmlFor="" className="text-[10px] font-poppins">
    //         Sebutkan Jumlah Hutang yang Anda miliki
    //       </label>
    //       <input
    //         type="text"
    //         placeholder="Rp."
    //         className="w-[250px] placeholder:text-xs placeholder:flex text-xs rounded-sm h-auto py-1 border border-black focus:outline-none px-1"
    //       />
    //     </div>
    //     <div className="max-w-[260px]  h-auto p-1 flex-col gap-1 flex rounded-sm ">
    //       <label htmlFor="" className="text-[10px] font-poppins">
    //         Sebutkan Jumlah Tagihan Listrik Per-Bulan
    //       </label>
    //       <input
    //         type="text"
    //         placeholder="Rp."
    //         className="w-[250px] placeholder:text-xs placeholder:flex text-xs rounded-sm h-auto py-1 border border-black focus:outline-none px-1"
    //       />
    //     </div>
    //     <div className="max-w-[260px]  h-auto p-1 flex-col gap-1 flex rounded-sm ">
    //       <label htmlFor="" className="text-[10px] font-poppins">
    //         Sebutkan Riwayat Kredit
    //       </label>
    //       <input
    //         type="text"
    //         placeholder="Ada, Rp."
    //         className="w-[250px] placeholder:text-xs placeholder:flex text-xs rounded-sm h-auto py-1 border border-black focus:outline-none px-1"
    //       />
    //     </div>
    //     <div className=" mt-2 ">
    //       <button className="bg-transparent h-9 w-22 hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border text-xs border-blue-500 hover:border-transparent rounded">
    //         Cek
    //       </button>
    //     </div>
    //   </div>
    // </div>

    <div className="bg-primary w-full h-screen overflow-hidden">
      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <Navbar />
        </div>
      </div>

      <div className={`bg-primary ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <Form />
        </div>
      </div>
    </div>
  );
};

export default index;
