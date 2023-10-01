import React from "react";
import GetStarted from "./GetStarted";

import { logoBlack } from "../assets";
import styles from "../style";
import Lottie from "lottie-react";
import animationData from "../assets/credit-card-animation.json";

const Form = () => {
  return (
    <section
      id="home"
      className={`flex md:flex-row flex-col font-poppins ${styles.paddingY} `}
    >
      <div
        className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}
      >
        <Lottie
          animationData={animationData}
          loop={true}
          style={{ width: "60%" }}
        />
      </div>

      <div
        className={`flex-1 flex ${styles.flexCenter} md:my-0 my-10 relative`}
      >
        <div className="w-2/3 h-fit bg-white absolute z-10 rounded-3xl">
          <div className="w-full flex justify-center my-4">
            <img
              src={logoBlack}
              alt="kredittepat-logo"
              className="w-[124px] h-[32px]"
            />
          </div>

          <form className="mx-6 my-4 flex flex-col gap-1">
            <div className="w-full h-auto p-1 flex flex-col gap-1 rounded-sm">
              <label htmlFor="">Berapa Umur anda</label>
              <input
                type="text"
                placeholder="Tahun"
                className="placeholder:flex rounded-sm h-auto py-1 border border-black focus:outline-none px-1"
              />
            </div>
            <div className="w-full p-1 h-auto flex flex-col rounded-sm ">
              <h2>Apakah Anda Sedang bekerja?</h2>
              <div className="flex gap-8">
                <div className="flex gap-2">
                  <input type="radio" id="ya" value="y" name="kerja" />
                  <label htmlFor="ya">Ya</label>
                </div>
                <div className="flex gap-2">
                  <input
                    type="radio"
                    id="tidak"
                    value="n"
                    name="kerja"
                    className="peer-checked:ring-red-500"
                  />
                  <label
                    htmlFor="tidak"
                    className="peer-checked/draft:text-sky-500"
                  >
                    Tidak
                  </label>
                </div>
              </div>
            </div>
            <div className="w-full  h-auto p-1 flex-col gap-1 flex rounded-sm ">
              <label htmlFor="">Berapa penedapatan Anda</label>
              <input
                type="text"
                placeholder="Rp."
                className="w-full placeholder:flex rounded-sm h-auto py-1 border border-black focus:outline-none px-1"
              />
            </div>
            <div className="w-full  h-auto p-1 flex-col gap-1 flex rounded-sm ">
              <label htmlFor="">Sebutkan Jumlah Hutang yang Anda miliki</label>
              <input
                type="text"
                placeholder="Rp."
                className="w-full placeholder:flex rounded-sm h-auto py-1 border border-black focus:outline-none px-1"
              />
            </div>
            <div className="w-full  h-auto p-1 flex-col gap-1 flex rounded-sm ">
              <label htmlFor="">
                Sebutkan Jumlah Tagihan Listrik Per-Bulan
              </label>
              <input
                type="text"
                placeholder="Rp."
                className="w-full placeholder:flex rounded-sm h-auto py-1 border border-black focus:outline-none px-1"
              />
            </div>
            <div className="w-full  h-auto p-1 flex-col gap-1 flex rounded-sm ">
              <label htmlFor="">Sebutkan Riwayat Kredit</label>
              <input
                type="text"
                placeholder="Rp."
                className="w-full placeholder:flex rounded-sm h-auto py-1 border border-black focus:outline-none px-1"
              />
            </div>
            <div class="text-center text-white mb-4">
              <button
                type="submit"
                class="btn btn-lg btn-primary btn-lg w-full mt-4 py-3 rounded-b-xl bg-primary"
              >
                Cek
              </button>
            </div>
          </form>
        </div>
        {/* gradient start */}
        <div className="absolute z-[0] w-[40%] h-[35%] top-0 pink__gradient" />
        <div className="absolute z-[1] w-[80%] h-[80%] rounded-full white__gradient bottom-40" />
        <div className="absolute z-[0] w-[50%] h-[50%] right-20 bottom-20 blue__gradient" />
        {/* gradient end */}
      </div>

      <div className={`ss:hidden ${styles.flexCenter}`}>
        <GetStarted />
      </div>
    </section>
  );
};

export default Form;
