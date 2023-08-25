import { firebaseApp } from "../config/firebaseConfig";
import {
  getFirestore,
  collection,
  getDocs,
  getDoc,
  setDoc,
  deleteDoc,
  doc,
} from "firebase/firestore";
import { newBucketDto } from "./bucketDto";

const TBL_BUCKET = "bucket";
const db = getFirestore(firebaseApp);

let num = 0;
num = 20;
num = 30;

export const getBucketList = async (search = "") => {
  try {
    const result = await getDocs(collection(db, TBL_BUCKET));
    const bucketList = result.docs.map((item) => {
      console.log(item.data());
      return { ...item.data() };
    });
    if (search) {
      search = search.toUpperCase();
      const searchList = bucketList.filter((item) => {
        return item.bucket.toUpperCase().indexOf(search) > -1;
      });
      return searchList;
    }
    return bucketList;
  } catch (error) {
    console.log(error);
    return [];
  }
};

export const getBucket = async (bucketId) => {
  try {
    const result = await getDoc(doc(db, TBL_BUCKET, bucketId));
    return result.data();
  } catch (error) {
    console.error(error);
  }
};

// export const getBucket = async (bucketId) => {
//   try {
//     const result = await getDocs(collection(db, TBL_BUCKET));
//     const bucket = result.docs.filter((item) => {
//       console.log("ID", item.id, bucketId);
//       return item.id === bucketId;
//     });
//     console.log("Bucket", bucket[0].data());
//     return { ...bucket[0].data(), id: bucket[0].id };
//   } catch (error) {
//     console.log(error);
//     return "";
//   }
// };

export const newBucket = async () => {
  const newBucket = newBucketDto();
  await saveBucket(newBucket);
  return await getBucket(newBucket.id);
};

export const saveBucket = async (bucket) => {
  try {
    await setDoc(doc(db, TBL_BUCKET, bucket.id), { ...bucket });
  } catch (error) {
    console.error(error);
  }
};

// export const saveBucket = async (bucket) => {
//   try {
//     const docRef = await addDoc(collection(db, TBL_BUCKET), {
//       ...bucket,
//     });
//     console.log("Result", docRef);
//   } catch (error) {
//     console.error(error);
//   }
// };

// export const updateBucket = async (bucket) => {
//   console.log(bucket);
//   setDoc(doc(db, TBL_BUCKET, bucket.id), { ...bucket });
// };

export const deleteBucket = async (id) => {
  try {
    await deleteDoc(doc(db, TBL_BUCKET, id));
  } catch (error) {
    console.error(error);
  }
};
