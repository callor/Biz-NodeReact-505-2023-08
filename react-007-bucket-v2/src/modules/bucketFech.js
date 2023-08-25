/**
 * web browser 의 indexedDB 를 핸들링 하기 위한 react 3rd LIB
 */
import localforage from "localforage";
import uuid from "react-uuid";
import moment from "moment";

/**
 * 코딩에서 매직리터럴(매직스트링, 매직넘버) 금지!!!
 * 문자열로 생성된 값을 참조하여 어떤 문제를 해결하는 것
 * if(name === '홍길동' )
 * nickname = '홍길동'
 *
 * const SAMPLE_NAME = '홍길동'
 * nickname = SAMPLE_NAME
 * if(name === SAMPLE_NAME)
 */
const LOCAL_DB = "BUCKET_LIST";

export const newBucketDto = () => {
  const bucketDto = {
    id: uuid(),
    img_src: "",
    sdate: moment().format("YYYY[-]MM[-]DD"),
    stime: moment().format("HH:mm:ss"),
    bucket: "새로운 Bucket",
    complete: false,
    favorite: false,
  };
  return bucketDto;
};

export const getBucketList = async (search = "") => {
  const bucketList = await localforage.getItem(LOCAL_DB);
  if (search) {
    search = search.toUpperCase();
    const resultBucketList = bucketList.filter((item) => {
      const bYes = item.bucket.toUpperCase().indexOf(search) > -1;
      return bYes;
    });
    return resultBucketList;
  }
  return bucketList;

  // db에서 get 한 데이터가 없으면 임시 데이터를 생성하고
  // db에 insert 한 후 그 데이터를 return
  // if (!bucketList) {
  //   const bucketDto = newBucketDto();
  //   // indexedDb 에 추가하기
  //   await setBucketList([bucketDto]);
  //   return [bucketDto];
  // }
};
// id 값을 매개변수로 받아서
// 리스트 중 id 값에 해당하는 한개의 item을 return
export const getBucket = async (id) => {
  const bucketList = await localforage.getItem(LOCAL_DB);
  // bucketList 중에서 id 가 매개변수로 전달받은 값과 같은 요소를 찾아서
  // 추출하기
  const bucket = bucketList?.find((item) => item.id === id);
  // bucketList 에서 데이터를 find 했는데
  // 결과값이 null 이거나 또는 undefined 인 경우도 있다
  // 결과값이 여러가지 falsy 값일 경우 모두 null 로 통일하여 return 하라
  return bucket ?? null;
};

export const saveBucket = async (bucket) => {
  const bucketList = await getBucketList();
  const newBucketList = bucketList.map((item) => {
    if (item.id === bucket.id) {
      return bucket;
    } else {
      return item;
    }
  });
  await setBucketList(newBucketList);
};

export const newBucket = async () => {
  const bucketDto = newBucketDto();
  // DB 에서 데이터를 가져왔는데 데이터가 하나도 없으면(null)
  // 빈 배열([]) 로 초기화 하라
  const bucketList = (await getBucketList()) || [];
  /**
   * JS 에서 기존 배열에 새로운 값을 추가하기
   * 배열.push(item) : 배열의 끝에 새로운 item 추가하기
   * 배열.unshift(item) : 배열의 맨 처음에 추가하기
   */
  bucketList?.unshift(bucketDto);
  await setBucketList(bucketList);
  return bucketDto;
};

export const deleteBucket = async (id) => {
  const bucketList = await getBucketList();
  const resultList = bucketList.filter((item) => item.id !== id);
  await setBucketList(resultList);
};

// browser 의 indexedDB 에 BUCKETLIST 이름으로 데이터 저장하기
export const setBucketList = async (bucketList) => {
  // bucketList 데이터를 JSON 데이터로 업데이트 하기
  return await localforage.setItem(LOCAL_DB, bucketList);
};
