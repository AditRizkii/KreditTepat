import React, { useEffect, useState } from "react";
import { useForm, Controller } from "react-hook-form";
import { NumericFormat } from "react-number-format";
import Modal from "./Modal";

const Form = () => {
  const {
    register,
    handleSubmit,
    resetField,
    control,
    formState: { errors },
  } = useForm();

  const handleReset = () => {
    resetField("umur");
    resetField("kerja");
    resetField("pendapatan");
    resetField("hutang");
    resetField("tagihanListrik");
    resetField("riwayatKredit");
    resetField("riwayatPenyakit");
    resetField("tabungan");
  };

  const [formData, setFormData] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const [result, setResult] = useState([]);

  const onSubmit = (data) => {
    setFormData(data);
    const umur = parseInt(data?.umur.replace(",", ""));
    const kerja = data?.kerja === "y" ? true : false;
    const pendapatan = parseInt(data?.pendapatan.substr(3).replaceAll(",", ""));
    const hutang = parseInt(data?.hutang.substr(3).replaceAll(",", ""));
    const tagihanListrik = parseInt(
      data?.tagihanListrik.substr(3).replaceAll(",", "")
    );
    const riwayatKredit = parseInt(
      data?.riwayatKredit.substr(3).replaceAll(",", "")
    );
    const riwayatPenyakit = data?.riwayatPenyakit === "y" ? true : false;
    const tabungan = parseInt(data?.tabungan.substr(3).replaceAll(",", ""));
    // console.log(hutang < 51000);
    // setIsOpen(true);
    // setKode("A01");
    const dataTrue = [
      {
        id: "A01",
        umur: umur >= 18 && umur < 35 ? true : false,
        kerja: kerja == true ? true : false,
        pendapatan:
          pendapatan >= 1000000 && pendapatan < 5000000 ? true : false,
        hutang: hutang >= 8000000 && hutang < 10000000 ? true : false,
        tagihanListrik:
          tagihanListrik >= 200000 && tagihanListrik < 500000 ? true : false,
        riwayatKredit:
          riwayatKredit >= 5000000 && riwayatKredit < 10000000 ? true : false,
        riwayatPenyakit: riwayatPenyakit == true ? true : false,
        tabungan: tabungan >= 1000000 && tabungan < 5000000 ? true : false,
      },
      {
        id: "A02",
        umur: umur >= 36 && umur < 45 ? true : false,
        kerja: kerja == true ? true : false,
        pendapatan:
          pendapatan >= 5000000 && pendapatan < 15000000 ? true : false,
        hutang: hutang >= 5000000 && hutang < 80000000 ? true : false,
        tagihanListrik:
          tagihanListrik >= 500000 && tagihanListrik < 1000000 ? true : false,
        riwayatKredit:
          riwayatKredit >= 1000000 && riwayatKredit < 5000000 ? true : false,
        riwayatPenyakit: riwayatPenyakit == true ? false : true,
        tabungan: tabungan >= 5000000 && tabungan < 15000000 ? true : false,
      },
      {
        id: "A03",
        umur: umur >= 36 && umur < 60 ? true : false,
        kerja: kerja == true ? true : false,
        pendapatan: pendapatan >= 15000000 ? true : false,
        hutang: hutang < 1000000 ? true : false,
        tagihanListrik: tagihanListrik >= 1000000 ? true : false,
        riwayatKredit: riwayatKredit < 1000000 ? true : false,
        riwayatPenyakit: riwayatPenyakit == false ? true : false,
        tabungan: tabungan >= 15000000 ? true : false,
      },
      {
        id: "A04",
        umur: umur >= 18 && umur < 35 ? true : false,
        kerja: kerja == false ? true : false,
        pendapatan:
          pendapatan >= 1000000 && pendapatan < 5000000 ? true : false,
        hutang: hutang >= 1000000 && hutang < 5000000 ? true : false,
        tagihanListrik:
          tagihanListrik >= 200000 && tagihanListrik < 500000 ? true : false,
        riwayatKredit:
          riwayatKredit >= 1000000 && riwayatKredit < 5000000 ? true : false,
        riwayatPenyakit: riwayatPenyakit == true ? true : false,
        tabungan: tabungan >= 1000000 && tabungan < 5000000 ? true : false,
      },
      {
        id: "A05",
        umur: umur >= 46 ? true : false,
        kerja: kerja == true ? true : false,
        pendapatan:
          pendapatan >= 1000000 && pendapatan < 5000000 ? true : false,
        hutang: hutang >= 1000000 && hutang < 5000000 ? true : false,
        tagihanListrik:
          tagihanListrik >= 200000 && tagihanListrik < 500000 ? true : false,
        riwayatKredit:
          riwayatKredit >= 1000000 && riwayatKredit < 5000000 ? true : false,
        riwayatPenyakit: riwayatPenyakit == true ? true : false,
        tabungan: tabungan >= 1000000 && tabungan < 5000000 ? true : false,
      },
    ];

    let jumlahTrue = {
      A01True: {
        id: "A01",
        jumlahTrue: 0,
      },
      A02True: {
        id: "A02",
        jumlahTrue: 0,
      },
      A03True: {
        id: "A03",
        jumlahTrue: 0,
      },
      A04True: {
        id: "A04",
        jumlahTrue: 0,
      },
      A05True: {
        id: "A05",
        jumlahTrue: 0,
      },
    };
    dataTrue.map((data) => {
      if (data?.id == "A01") {
        if (data?.umur == true) {
          jumlahTrue.A01True.jumlahTrue++;
        }
        if (data?.kerja == true) {
          jumlahTrue.A01True.jumlahTrue++;
        }
        if (data?.pendapatan == true) {
          jumlahTrue.A01True.jumlahTrue++;
        }
        if (data?.hutang == true) {
          jumlahTrue.A01True.jumlahTrue++;
        }
        if (data?.tagihanListrik == true) {
          jumlahTrue.A01True.jumlahTrue++;
        }
        if (data?.riwayatKredit == true) {
          jumlahTrue.A01True.jumlahTrue++;
        }
        if (data?.riwayatPenyakit == true) {
          jumlahTrue.A01True.jumlahTrue++;
        }
        if (data?.tabungan == true) {
          jumlahTrue.A01True.jumlahTrue++;
        }
      }

      if (data?.id == "A02") {
        if (data?.umur == true) {
          jumlahTrue.A02True.jumlahTrue++;
        }
        if (data?.kerja == true) {
          jumlahTrue.A02True.jumlahTrue++;
        }
        if (data?.pendapatan == true) {
          jumlahTrue.A02True.jumlahTrue++;
        }
        if (data?.hutang == true) {
          jumlahTrue.A02True.jumlahTrue++;
        }
        if (data?.tagihanListrik == true) {
          jumlahTrue.A02True.jumlahTrue++;
        }
        if (data?.riwayatKredit == true) {
          jumlahTrue.A02True.jumlahTrue++;
        }
        if (data?.riwayatPenyakit == true) {
          jumlahTrue.A02True.jumlahTrue++;
        }
        if (data?.tabungan == true) {
          jumlahTrue.A02True.jumlahTrue++;
        }
      }

      if (data?.id == "A03") {
        if (data?.umur == true) {
          jumlahTrue.A03True.jumlahTrue++;
        }
        if (data?.kerja == true) {
          jumlahTrue.A03True.jumlahTrue++;
        }
        if (data?.pendapatan == true) {
          jumlahTrue.A03True.jumlahTrue++;
        }
        if (data?.hutang == true) {
          jumlahTrue.A03True.jumlahTrue++;
        }
        if (data?.tagihanListrik == true) {
          jumlahTrue.A03True.jumlahTrue++;
        }
        if (data?.riwayatKredit == true) {
          jumlahTrue.A03True.jumlahTrue++;
        }
        if (data?.riwayatPenyakit == true) {
          jumlahTrue.A03True.jumlahTrue++;
        }
        if (data?.tabungan == true) {
          jumlahTrue.A03True.jumlahTrue++;
        }
      }

      if (data?.id == "A04") {
        if (data?.umur == true) {
          jumlahTrue.A04True.jumlahTrue++;
        }
        if (data?.kerja == true) {
          jumlahTrue.A04True.jumlahTrue++;
        }
        if (data?.pendapatan == true) {
          jumlahTrue.A04True.jumlahTrue++;
        }
        if (data?.hutang == true) {
          jumlahTrue.A04True.jumlahTrue++;
        }
        if (data?.tagihanListrik == true) {
          jumlahTrue.A04True.jumlahTrue++;
        }
        if (data?.riwayatKredit == true) {
          jumlahTrue.A04True.jumlahTrue++;
        }
        if (data?.riwayatPenyakit == true) {
          jumlahTrue.A04True.jumlahTrue++;
        }
        if (data?.tabungan == true) {
          jumlahTrue.A04True.jumlahTrue++;
        }
      }

      if (data?.id == "A05") {
        if (data?.umur == true) {
          jumlahTrue.A05True.jumlahTrue++;
        }
        if (data?.kerja == true) {
          jumlahTrue.A05True.jumlahTrue++;
        }
        if (data?.pendapatan == true) {
          jumlahTrue.A05True.jumlahTrue++;
        }
        if (data?.hutang == true) {
          jumlahTrue.A05True.jumlahTrue++;
        }
        if (data?.tagihanListrik == true) {
          jumlahTrue.A05True.jumlahTrue++;
        }
        if (data?.riwayatKredit == true) {
          jumlahTrue.A05True.jumlahTrue++;
        }
        if (data?.riwayatPenyakit == true) {
          jumlahTrue.A05True.jumlahTrue++;
        }
        if (data?.tabungan == true) {
          jumlahTrue.A05True.jumlahTrue++;
        }
      }
    });

    const arr = [
      jumlahTrue.A01True.jumlahTrue,
      jumlahTrue.A02True.jumlahTrue,
      jumlahTrue.A03True.jumlahTrue,
      jumlahTrue.A04True.jumlahTrue,
      jumlahTrue.A05True.jumlahTrue,
    ];

    if (!arr.includes(8)) {
      setResult("A06");
      setIsOpen(true);
    } else {
      if (jumlahTrue.A01True.jumlahTrue == 8) {
        setResult(jumlahTrue.A01True.id);
        setIsOpen(true);
      }
      if (jumlahTrue.A02True.jumlahTrue == 8) {
        setResult(jumlahTrue.A02True.id);
        setIsOpen(true);
      }
      if (jumlahTrue.A03True.jumlahTrue == 8) {
        setResult(jumlahTrue.A03True.id);
        setIsOpen(true);
      }
      if (jumlahTrue.A04True.jumlahTrue == 8) {
        setResult(jumlahTrue.A04True.id);
        setIsOpen(true);
      }
      if (jumlahTrue.A05True.jumlahTrue == 8) {
        setResult(jumlahTrue.A05True.id);
        setIsOpen(true);
      }
    }
    console.log(jumlahTrue);
    console.log(dataTrue);
  };

  // useEffect(() => {
  //   console.log(formData);
  // }, [formData]);

  return (
    <>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="mx-6 my-4 flex flex-col gap-1"
      >
        <div className="w-full h-auto p-1 flex flex-col gap-1 rounded-sm">
          <label htmlFor="">Umur Anda</label>
          <Controller
            render={({ field }) => (
              <NumericFormat
                thousandSeparator=","
                {...field}
                placeholder="cth: 20 Tahun"
                className="placeholder:flex rounded-sm h-auto py-1 border border-black focus:outline-none px-1"
              />
            )}
            aria-invalid={errors.umur ? "true" : "false"}
            defaultValue=""
            name="umur"
            control={control}
            rules={{ required: true }}
          />
          {errors.umur?.type === "required" && (
            <p role="alert" className="text-red-500 text-xs">
              Umur harus diisi
            </p>
          )}
        </div>
        <div className="w-full p-1 h-auto flex flex-col rounded-sm ">
          <h2>Apakah Anda Sedang bekerja?</h2>
          <div className="flex gap-8">
            <div className="flex gap-2">
              <input
                {...register("kerja", { required: true })}
                aria-invalid={errors.kerja ? "true" : "false"}
                type="radio"
                id="ya"
                value="y"
                name="kerja"
              />
              <label htmlFor="ya">Ya</label>
            </div>
            <div className="flex gap-2">
              <input
                {...register("kerja", { required: true })}
                aria-invalid={errors.kerja ? "true" : "false"}
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
          {errors.kerja?.type === "required" && (
            <p role="alert" className="text-red-500 text-xs">
              Pilih salah satu
            </p>
          )}
        </div>
        <div className="w-full  h-auto p-1 flex-col gap-1 flex rounded-sm ">
          <label htmlFor="">Pendapatan Anda</label>
          <Controller
            render={({ field }) => (
              <NumericFormat
                prefix="Rp."
                thousandSeparator=","
                {...field}
                placeholder="Rp."
                className="placeholder:flex rounded-sm h-auto py-1 border border-black focus:outline-none px-1"
              />
            )}
            aria-invalid={errors.pendapatan ? "true" : "false"}
            defaultValue=""
            name="pendapatan"
            control={control}
            rules={{ required: true }}
          />
          {/* <input
          {...register("pendapatan", { required: true, pattern: /^[0-9]+$/i })}
          aria-invalid={errors.pendapatan ? "true" : "false"}
          type="text"
          placeholder="Rp."
          className="w-full placeholder:flex rounded-sm h-auto py-1 border border-black focus:outline-none px-1"
        /> */}
          {errors.pendapatan?.type === "required" && (
            <p role="alert" className="text-red-500 text-xs">
              Pendapatan harus diisi
            </p>
          )}
        </div>
        <div className="w-full h-auto p-1 flex-col gap-1 flex rounded-sm ">
          <label htmlFor="">Jumlah Hutang yang Anda miliki</label>
          <Controller
            render={({ field }) => (
              <NumericFormat
                prefix="Rp."
                thousandSeparator=","
                {...field}
                placeholder="Rp."
                className="placeholder:flex rounded-sm h-auto py-1 border border-black focus:outline-none px-1"
              />
            )}
            aria-invalid={errors.hutang ? "true" : "false"}
            defaultValue=""
            name="hutang"
            control={control}
            rules={{ required: true }}
          />
          {/* <input
          {...register("hutang", { required: true, pattern: /^[0-9]+$/i })}
          aria-invalid={errors.hutang ? "true" : "false"}
          type="text"
          placeholder="Rp."
          className="w-full placeholder:flex rounded-sm h-auto py-1 border border-black focus:outline-none px-1"
        /> */}
          {errors.hutang?.type === "required" && (
            <p role="alert" className="text-red-500 text-xs">
              Hutang harus diisi
            </p>
          )}
        </div>
        <div className="w-full  h-auto p-1 flex-col gap-1 flex rounded-sm ">
          <label htmlFor="">
            Jumlah Tagihan Listrik dalam 3 Bulan terakhir
          </label>
          <Controller
            render={({ field }) => (
              <NumericFormat
                prefix="Rp."
                thousandSeparator=","
                {...field}
                placeholder="Rp."
                className="placeholder:flex rounded-sm h-auto py-1 border border-black focus:outline-none px-1"
              />
            )}
            aria-invalid={errors.tagihanListrik ? "true" : "false"}
            defaultValue=""
            name="tagihanListrik"
            control={control}
            rules={{ required: true }}
          />
          {/* <input
          {...register("tagihanListrik", {
            required: true,
            pattern: /^[0-9]+$/i,
          })}
          aria-invalid={errors.tagihanListrik ? "true" : "false"}
          type="text"
          placeholder="Rp."
          className="w-full placeholder:flex rounded-sm h-auto py-1 border border-black focus:outline-none px-1"
        /> */}
          {errors.tagihanListrik?.type === "required" && (
            <p role="alert" className="text-red-500 text-xs">
              Tagihan Listrik harus diisi
            </p>
          )}
        </div>
        <div className="w-full  h-auto p-1 flex-col gap-1 flex rounded-sm ">
          <label htmlFor="">Sebutkan Riwayat Kredit</label>
          <Controller
            render={({ field }) => (
              <NumericFormat
                prefix="Rp."
                thousandSeparator=","
                {...field}
                placeholder="Rp."
                className="placeholder:flex rounded-sm h-auto py-1 border border-black focus:outline-none px-1"
              />
            )}
            aria-invalid={errors.riwayatKredit ? "true" : "false"}
            defaultValue=""
            name="riwayatKredit"
            control={control}
            rules={{ required: true }}
          />
          {/* <input
          {...register("riwayatKredit", {
            required: true,
            pattern: /^[0-9]+$/i,
          })}
          aria-invalid={errors.riwayatKredit ? "true" : "false"}
          type="text"
          placeholder="Rp."
          className="w-full placeholder:flex rounded-sm h-auto py-1 border border-black focus:outline-none px-1"
        /> */}
          {errors.riwayatKredit?.type === "required" && (
            <p role="alert" className="text-red-500 text-xs">
              Riwayat Kredit harus diisi
            </p>
          )}
        </div>
        <div className="w-full p-1 h-auto flex flex-col rounded-sm ">
          <h2>Apakah Anda Memiliki Penyakit Kronis?</h2>
          <div className="flex gap-8">
            <div className="flex gap-2">
              <input
                {...register("riwayatPenyakit", { required: true })}
                aria-invalid={errors.riwayatPenyakit ? "true" : "false"}
                type="radio"
                id="yasakit"
                value="y"
                name="riwayatPenyakit"
              />
              <label htmlFor="yasakit">Ya</label>
            </div>
            <div className="flex gap-2">
              <input
                {...register("riwayatPenyakit", { required: true })}
                aria-invalid={errors.riwayatPenyakit ? "true" : "false"}
                type="radio"
                id="tidaksakit"
                value="n"
                name="riwayatPenyakit"
              />
              <label
                htmlFor="tidaksakit"
                className="peer-checked/draft:text-sky-500"
              >
                Tidak
              </label>
            </div>
          </div>
          {errors.riwayatPenyakit?.type === "required" && (
            <p role="alert" className="text-red-500 text-xs">
              Pilih salah satu
            </p>
          )}
        </div>
        <div className="w-full  h-auto p-1 flex-col gap-1 flex rounded-sm ">
          <label htmlFor="">Jumlah Tabungan Anda saat ini</label>
          <Controller
            render={({ field }) => (
              <NumericFormat
                prefix="Rp."
                thousandSeparator=","
                {...field}
                placeholder="Rp."
                className="placeholder:flex rounded-sm h-auto py-1 border border-black focus:outline-none px-1"
              />
            )}
            aria-invalid={errors.tabungan ? "true" : "false"}
            defaultValue=""
            name="tabungan"
            control={control}
            rules={{ required: true }}
          />
          {/* <input
          {...register("tabungan", { required: true, pattern: /^[0-9]+$/i })}
          aria-invalid={errors.tabungan ? "true" : "false"}
          type="text"
          placeholder="Rp."
          className="w-full placeholder:flex rounded-sm h-auto py-1 border border-black focus:outline-none px-1"
        /> */}
          {errors.tabungan?.type === "required" && (
            <p role="alert" className="text-red-500 text-xs">
              Tabungan harus diisi
            </p>
          )}
        </div>
        <div className="text-center text-white mb-4 flex gap-2 justify-center">
          <button
            type="button"
            onClick={handleReset}
            className="btn btn-lg btn-primary btn-lg w-1/2 mt-4 py-3 rounded-xl border border-primary text-primary bg-white"
          >
            Reset
          </button>
          <button
            type="submit"
            className="btn btn-lg btn-primary btn-lg w-1/2 mt-4 py-3 rounded-xl bg-primary"
          >
            Cek
          </button>
        </div>
      </form>
      {isOpen && <Modal setIsOpen={setIsOpen} jenisKredits={result} />}
    </>
  );
};

export default Form;
