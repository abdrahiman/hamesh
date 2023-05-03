import React, { useContext, useEffect, useState } from "react";
import { MdMoreTime, MdKeyboardCommandKey, MdDarkMode } from "react-icons/md";
import {
  RiSettings2Fill,
  RiUploadCloudFill,
  RiFindReplaceFill,
} from "react-icons/ri";
import { HiSave } from "react-icons/hi";
import {
  FaArrowDown,
  FaArrowLeft,
  FaArrowRight,
  FaArrowUp,
  FaUserAlt,
} from "react-icons/fa";
import { editorContext } from "../../context/edioreProvider";
export default function Aside() {
  let [selected, setSelceted] = useState<string | null>(null);
  let { settingsData, setSettingsData, editorData, setEditorData } =
    useContext(editorContext);
  let [time, setTime] = useState(0);
  let [formate, setFormate] = useState("");
  let [replace, setReplace] = useState({ repEd: "", repTo: "" });

  let handleResync = () => {
    console.log(editorData?.caps);
    // setEditorData((prv: any) => ({
    //   ...prv,
    //   caps: editorData?.caps.map((c) => {
    //     c.start = c.start + +time;
    //     c.dur = c.dur + +time;
    //   }),
    // }));
  };
  let handleDown = () => {};
  return (
    <aside>
      <div className="icons">
        <div className="">
          <button
            className={selected == "export" ? "active" : ""}
            onClick={() => setSelceted(selected == "export" ? null : "export")}
          >
            <RiUploadCloudFill />
          </button>
          <button
            onClick={() =>
              setSelceted(selected == "settings" ? null : "settings")
            }
            className={selected == "settings" ? "active" : ""}
          >
            <RiSettings2Fill />
          </button>
          <button
            onClick={() => setSelceted(selected == "save" ? null : "save")}
            className={selected == "save" ? "active" : ""}
          >
            <HiSave />
          </button>
          <button
            onClick={() =>
              setSelceted(selected == "shortcuts" ? null : "shortcuts")
            }
            className={selected == "shortcuts" ? "active" : ""}
          >
            <MdKeyboardCommandKey />
          </button>
          <button
            onClick={() => setSelceted(selected == "time" ? null : "time")}
            className={selected == "time" ? "active" : ""}
          >
            <MdMoreTime />
          </button>
          <button
            onClick={() =>
              setSelceted(selected == "replace" ? null : "replace")
            }
            className={selected == "replace" ? "active" : ""}
          >
            <RiFindReplaceFill />
          </button>
        </div>
        <div className="">
          <button>
            <MdDarkMode />
          </button>
          <button>
            <FaUserAlt />
          </button>
        </div>
      </div>
      {selected != null && (
        <main>
          {selected == "export" && (
            <>
              <h2>Title and Language Settings:</h2>
              <div className="lbip">
                <label>Create new subtitles in:</label>
                <select
                  id="small"
                  className="block w-full p-2 mt-3 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:via-violet-500 focus:border-violet-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:via-violet-500 dark:focus:border-violet-500"
                >
                  <option selected>Choose a Language</option>
                  <option value="MR">Maroc</option>
                  <option value="CA">Canada</option>
                  <option value="FR">France</option>
                  <option value="DE">Germany</option>
                </select>
              </div>
              <div className="lbip">
                <label>Translation of the video title:</label>
                <input type="text" />
                <span>
                  This will be used when someone watches the video with your
                  captions. If left blank, the original title will be
                  used.(optional)
                </span>
              </div>
              <div className="lbip">
                <label>Captions Detail:</label>
                <input type="text" />
                <span>If you wish to include language details (optional)</span>
              </div>
              <div className="buttonHandler">
                <button>Save</button>
              </div>
            </>
          )}
          {selected == "settings" && (
            <>
              <h2>Editor Settings :</h2>
              <div className="list">
                <label className="relative inline-flex items-center mb-5 cursor-pointer">
                  <input type="checkbox" value="" className="sr-only peer" />
                  <div className="w-9 h-5 bg-gray-200 peer-focus:outline-none peer-focus:via-violet-700 dark:peer-focus:via-violet-700 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[4px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-violet-500"></div>
                  <span className="ml-3">Pause video while typing</span>
                </label>
                <label className="relative inline-flex items-center mb-5 cursor-pointer">
                  <input type="checkbox" value="" className="sr-only peer" />
                  <div className="w-9 h-5 bg-gray-200 peer-focus:outline-none peer-focus:via-violet-700 dark:peer-focus:via-violet-700 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[4px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-violet-500"></div>
                  <span className="ml-3">Right to left text editor (RTL)</span>
                </label>
                <label className="relative inline-flex items-center mb-5 cursor-pointer">
                  <input type="checkbox" value="" className="sr-only peer" />
                  <div className="w-9 h-5 bg-gray-200 peer-focus:outline-none peer-focus:via-violet-700 dark:peer-focus:via-violet-700 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[4px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-violet-500"></div>
                  <span className="ml-3">Auto save every 30 seconds</span>
                </label>
                <span>
                  Auto save can only be used after saving the captions for the
                  video for a first time manually.
                </span>
              </div>
              <div>
                <h3>Caption style:</h3>
                <div className="flex gap-4">
                  <label>Enter text Color</label>
                  <input type="color" />
                </div>
                <div className="flex gap-4">
                  <label>Enter background Color</label>
                  <input type="color" />
                </div>
              </div>
              <div className="buttonHandler">
                <button>Save</button>
              </div>
            </>
          )}
          {selected == "save" && (
            <>
              <h2>Download subtitles</h2>
              <div className="lbip">
                <label>Download download format:</label>
                <select
                  id="small"
                  className="block w-full p-2 mt-3 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:via-violet-500 focus:border-violet-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:via-violet-500 dark:focus:border-violet-500"
                >
                  <option selected className="pointer-events-none">
                    Choose formate
                  </option>
                  <option
                    value="srt"
                    onClick={(e: any) => setFormate(e.target.value)}
                  >
                    .srt
                  </option>
                  <option
                    value="txt"
                    onClick={(e: any) => setFormate(e.target.value)}
                  >
                    .txt (untimed - not recommended)
                  </option>
                  <option
                    value="vtt"
                    onClick={(e: any) => setFormate(e.target.value)}
                  >
                    .vtt
                  </option>
                  <option
                    value="ytt"
                    onClick={(e: any) => setFormate(e.target.value)}
                  >
                    .ytt
                  </option>
                </select>
              </div>
              <h3>How to upload subtitles to YouTube?</h3>
              <p>If you&apos;re the YouTuber, you can follow these steps: </p>
              <div className="steps">
                YouTube Studio &gt; Edit Video &gt; Subtitles &gt; ADD/EDIT &gt;
                Upload file &gt; WITH timing &gt; Publish
              </div>
              <div
                className={`buttonHandler ${
                  formate != ""
                    ? "pointer-events-auto opacity-100"
                    : "opacity-50 pointer-events-none"
                }`}
              >
                <button onClick={handleDown}>Download</button>
              </div>
            </>
          )}
          {selected == "shortcuts" && (
            <>
              <h2>Keyboard Shortcuts</h2>
              <div className="naro flex flex-row gap-4">
                <kbd>tab</kbd>
                Play / Pause
              </div>
              <div className="naro flex flex-row gap-4">
                <kbd>shift+tab</kbd> Go 2 seconds back
              </div>
              <div className="naro flex flex-row gap-4">
                <kbd>
                  ctrl+shift+
                  <FaArrowLeft />
                </kbd>
                Go 4 seconds back
              </div>
              <div className="naro flex flex-row gap-4">
                <kbd>
                  ctrl+shift+
                  <FaArrowRight />
                </kbd>
                Go 4 seconds forward
              </div>
              <div className="naro flex flex-row gap-4">
                <kbd>ctrl+enter</kbd>
                Split caption in caret | position
              </div>
              <div className="naro flex flex-row gap-4">
                <kbd>
                  alt+
                  <FaArrowDown />
                </kbd>
                move to the previous one
              </div>
              <div className="naro flex flex-wrap flex-row gap-4">
                <kbd>
                  alt+
                  <FaArrowUp />
                </kbd>
                move to the next one
              </div>
            </>
          )}
          {selected == "time" && (
            <>
              <h2>Resync All Captions</h2>
              <div className="lbip">
                <label>
                  Resync all captions by a specified time (in seconds)
                </label>
                <input
                  type="number"
                  value={time}
                  onChange={(e: any) => setTime(e.target.value)}
                />
                <span>
                  Hint: Type a minus (-) in front in case you want all captions
                  to resync to less time. E.g. -0,002 or -0.002
                </span>
              </div>
              <div
                className={`buttonHandler ${
                  time != 0
                    ? "pointer-events-auto opacity-100"
                    : "opacity-50 pointer-events-none"
                }`}
              >
                <button onClick={handleResync}>Resync</button>
              </div>
            </>
          )}
          {selected == "replace" && (
            <>
              <h2>Find and Replace</h2>
              <h3>
                Replace specific text occurrences throughout your captions.
              </h3>
              <p>Example: &#34;youtube&#34; &#34;YouTube&#34;.</p>
              <div className="lbip">
                <span>
                  This feature is case-sensitive (upper and lower case letters
                  are relevant here).
                </span>
                <div className="flex flex-row gap-2 justify-between items-center w-full">
                  <input
                    type="text"
                    value={replace.repEd}
                    onChange={(e) =>
                      setReplace({
                        repEd: replace.repEd,
                        repTo: e.target.value,
                      })
                    }
                  />
                  <FaArrowRight style={{ height: "1.2rem", width: "1.2rem" }} />
                  <input
                    type="text"
                    value={replace.repTo}
                    onChange={(e) =>
                      setReplace({
                        repEd: e.target.value,
                        repTo: replace.repTo,
                      })
                    }
                  />
                </div>
              </div>
              <div
                className={`buttonHandler ${
                  replace.repEd == "" && replace.repTo == ""
                    ? "pointer-events-auto opacity-100"
                    : "opacity-50 pointer-events-none"
                }`}
              >
                <button>find all and Replace</button>
              </div>
            </>
          )}
        </main>
      )}
    </aside>
  );
}
