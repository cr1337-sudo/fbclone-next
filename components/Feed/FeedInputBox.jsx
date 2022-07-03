import Image from "next/image";
import { useSession } from "next-auth/react";
import {
  CameraIcon,
  EmojiHappyIcon,
  VideoCameraIcon,
} from "@heroicons/react/solid";
import { useRef, useState } from "react";
import { db, storage } from "../../firebase";
import firebase from "firebase/compat/app";

const FeedInputBox = () => {
  const { data: session } = useSession();
  const [imageToPost, setImageToPost] = useState(null);
  const inputRef = useRef(null);
  const filePickerRef = useRef(null);

  const sendPost = (e) => {
    e.preventDefault();

    if (!inputRef.current.value) return;

    db.collection("posts")
      .add({
        message: inputRef.current.value,
        name: session.user.name,
        email: session.user.email,
        image: session.user.image,
        timestamp: firebase.firestore.FieldValue.serverTimestamp(),
      })
      .then((doc) => {
        if (imageToPost) {
          const uploadTask = storage
            .ref(`posts/${doc.id}`)
            .putString(imageToPost, "data_url");
          removeImage();
          uploadTask.on(
            "state_change",
            null,
            (e) => console.log(e),
            () => {
              storage
                .ref("posts")
                .child(doc.id)
                .getDownloadURL()
                .then((url) => {
                  db.collection("posts").doc(doc.id).set(
                    {
                      postImage: url,
                    },
                    {
                      merge: true,
                    }
                  );
                });
            }
          );
        }
      });
    inputRef.current.value = "";
  };

  const addImageToPost = (e) => {
    const reader = new FileReader();
    if (e.target.files[0]) {
      reader.readAsDataURL(e.target.files[0]);
    }

    reader.onload = (rederEvent) => {
      setImageToPost(rederEvent.target.result);
    };
  };

  const removeImage = () => {
    setImageToPost(null);
  };

  return (
    <div className="bg-white p-2 rounded-2xl shadow-md to-gray-500 font-medium mt-6">
      <div className="flex space-x-4 p-4 items-center">
        <Image
          className="rounded-full"
          src={session.user.image}
          width={40}
          height={40}
          layout="fixed"
        />
        <form action="" className="flex flex-1">
          <input
            type="text"
            className="rounded-full h-12 bg-gray-100 flex-grow px-5 focus:outline-none"
            placeholder={`What's on your mind ${session.user.name}?`}
            ref={inputRef}
          />
          <button className="hidden" type="submit" onClick={sendPost}>
            Submit
          </button>
        </form>
        {/* Preview  */}
        {imageToPost && (
          <div
            onClick={removeImage}
            className="flex flex-col filter hover:backdrop-brightness-110 transition transform hover:scale-105 cursor-pointer"
          >
            <img
              src={imageToPost}
              alt="Preview"
              className="h-10 object-contain"
            />
            <p className="text-red-500 text-center">Delete</p>
          </div>
        )}
      </div>
      <div className="flex justify-evenly p-3 border-t">
        <div className="inputIcon">
          <VideoCameraIcon className="h-7 text-red-500" />
          <p className="text-xs sm:text-sm xl:text-base">Live Video</p>
        </div>
        <div className="inputIcon">
          <CameraIcon className="h-7 text-green-400" />
          <label
            htmlFor="inputFile"
            className="text-xs sm:text-sm xl:text-base cursor-pointer"
          >
            Photo/Video
          </label>
          <input
            onChange={addImageToPost}
            id="inputFile"
            type="file"
            ref={filePickerRef}
            hidden
          />
        </div>
        <div className="inputIcon">
          <EmojiHappyIcon className="h-7 text-yellow-300" />
          <p className="text-xs sm:text-sm xl:text-base">Feeling/Activity</p>
        </div>
      </div>
    </div>
  );
};

export default FeedInputBox;
