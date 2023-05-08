import React, { useContext, useState } from "react";
import { FcPlus } from "react-icons/fc";
import { IoIosAdd, IoMdClose, IoMdRemove } from "react-icons/io";
import { EditorContext } from "../../context/edioreProvider";
import GenerateImage from "../../utils/image-generate";

function Header() {
  let { editorData, setEditorData } = useContext(EditorContext);
  //upload a image to cloud
  let handleUpload = async (e: any) => {
    // setCover(null);
    const files = e.target.files;
    const data = new FormData();
    data.append("file", files[0]);
    data.append("upload_preset", "ilmamcdn");
    let config: RequestInit = {
      method: "POST",
      body: data,
    };
    const res = await fetch(
      "https://api.cloudinary.com/v1_1/dgvxswr30/image/upload",
      config
    );
    const file = await res.json();
    setEditorData((prv: any) => ({ ...prv, coverUrl: file.secure_url }));
  };
  let [tagInp, setTag] = useState(false);
  let [inpValue, setValue] = useState("");
  let handleAddTag = () => {
    inpValue = inpValue.replaceAll("#", "");
    if (tagInp) {
      if (inpValue && !editorData.tags.some((el) => el == inpValue))
        setEditorData((prv: any) => ({
          ...prv,
          tags: [...prv.tags, inpValue.replaceAll("#", "")],
        }));
    } else {
      setTag(true);
    }
    setValue("");
  };

  return (
    <header className="w-full p-4 flex flex-col max-sm:p-0">
      <div className="w-full mb-5">
        {editorData.coverUrl ? (
          <div className="flex flex-row-reverse justify-around items-center">
            <img
              alt=""
              className="w-48 h-24 object-cover rounded-lg object-center"
              src={editorData.coverUrl}
            />
            <div className="flex gap-4">
              <button className="px-3 covr py-1 font-medium rounded-lg transition relative">
                تبديل
                <input
                  type="file"
                  className="absolute top-0 left-0 w-full h-full opacity-0 "
                  onInput={handleUpload}
                />
              </button>
              <button
                className="px-3 covr py-1 font-medium rounded-lg transition relative"
                onClick={() =>
                  setEditorData((prv: any) => ({
                    ...prv,
                    coverUrl: "",
                  }))
                }
              >
                ازالة
              </button>
            </div>
          </div>
        ) : (
          <>
            <button className="px-4 covr py-1 font-medium rounded-lg transition relative">
              اضافة صورة الغلاف
              <input
                type="file"
                onInput={handleUpload}
                className="absolute top-0 left-0 w-full h-full opacity-0 "
              />
            </button>
          </>
        )}
      </div>
      <input
        type="text"
        value={editorData.title}
        onChange={(e) =>
          setEditorData((prv: any) => ({ ...prv, title: e.target.value }))
        }
        placeholder="ادخل عنوانا مناسبا..."
        className="w-full max-sm:text-3xl max-md:text-4xl bg-transparent outline-none h-14 mb-3 text-5xl font-semibold"
      />
      <div className="desc">
        <textarea
          value={editorData.description}
          onChange={(e) =>
            setEditorData((prv: any) => ({
              ...prv,
              description: e.target.value,
            }))
          }
          maxLength={250}
          placeholder="ادخل وصفا لمقالك..."
          className="w-full bg-transparent outline-none h-14 mb-2 font-semibold"
        />
      </div>
      <div className="tags mb-4 flex gap-2 justify-start items-center">
        {tagInp && (
          <>
            <button
              className="add rounded-lg p-1 text-white"
              onClick={() => setTag(false)}
            >
              <IoMdClose className="w-5 h-5" />
            </button>
            <input
              type="text"
              value={inpValue}
              onKeyDown={(e): any => {
                if (e.key === "Enter") handleAddTag;
              }}
              onChange={(e: any) => setValue(e.target.value)}
              className="w-24 rounded-md ps-1 bg-transparent border-solid border-2 border-white h-full"
            />
          </>
        )}
        <button
          onClick={handleAddTag}
          className="add rounded-lg p-1 bg-gray-600 text-white"
        >
          <IoIosAdd className="w-5 h-5" />
        </button>
        <ul className="tags-list">
          {editorData.tags.map((el, i) => (
            <li
              key={i}
              className="relative cursor-pointer"
              onClick={() =>
                setEditorData((prv: any) => ({
                  ...prv,
                  tags: [...prv.tags.filter((tg: string) => tg != el)],
                }))
              }
            >
              #{el}
              <span className="opacity-0 rounded-xl hover:opacity-100 bg-opacity-50 bg-black z-10 w-full h-full absolute top-0 left-0 flex justify-center items-center">
                <IoMdClose className="w-5 h-5" />
              </span>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
}

export default Header;
