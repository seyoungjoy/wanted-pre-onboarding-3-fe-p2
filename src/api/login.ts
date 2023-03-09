import { BASE_URL } from './const'
import { getAccessTokenFromLocalStorage, saveAccessTokenToLocalStorage } from '../utils/accessTokenHandler'
import { UserInfo } from '../types/user'
import axios from "axios";

type LoginResult = 'success' | 'fail'

export type LoginResultWithToken = {
  result: 'success'
  access_token: string
} | {
  result: 'fail'
  access_token: null
}

export interface LoginRequest {
  username: string
  password: string
}

/*********
 *  실습 2-1
 * */

export const loginWithToken = async (args: LoginRequest): Promise<LoginResultWithToken> => {
  // TODO(2-1): 로그인 API 호출 및 토큰 반환하기
  // POST, `${ BASE_URL }/auth/login`을 호출하세요.
  // API Spec은 강의 자료를 참고하세요.
  // access_token 발급에 성공한 경우에는 { result: 'success', access_token: string } 형태의 값을 반환하세요.

  try {
    const response = await axios({
      url:BASE_URL+"/auth/login",
      method:"post",
      data:args
    })
    // 여기서 에러 핸들링
    if(response.status === 201){
      return {
        result: 'success',
        access_token: response.data.access_token
      }
    } else {
      return {
        result: 'fail',
        access_token: null
      }
    }
  }
  catch (error){
    return {
      result: 'fail',
      access_token: null
    }
  }


}

export const getCurrentUserInfoWithToken = async (token: string): Promise<UserInfo | null> => {
  // TODO(2-1): 함수에서 토큰을 직접 주입받아 사용하기
  try {
    const response = await axios({
      url:`${BASE_URL}/profile`,
      headers: {
        Authorization: `Bearer ${token}`
      },
    });
    // ?? response의 성공 처리시 어떤 데이터로 구분하는지 궁금
    if (response.status === 200){
      return response.data.userInfo;
    } else {
      return null;
    }
  } catch (err){
    // ??catch에서는 어떻게 처리하는게 좋은지 궁금.
    // 직접 에러를 만들어주는게 좋은건지?
    return null
  }
  // GET, `${ BASE_URL }/profile`을 호출하세요.
  // argument로 전달받은 token을 Authorization header에 Bearer token으로 넣어주세요.
  // API Spec은 강의 자료를 참고하세요.
  // 유저 정보 조회에 성공한 경우에는 UserInfo 타입의 값을 반환하세요.

}


/*********
 *  실습 2-2
 * */

export const login = async (args: LoginRequest): Promise<LoginResult> => {
  // TODO(2-2): 로그인 API 호출 및 access token 로컬스토리지에 저장하기
  // POST, `${ BASE_URL }/auth/login`을 호출하세요.
  // API Spec은 강의 자료를 참고하세요.
  // access_token 발급에 성공한 경우에는 saveAccessTokenToLocalStorage 함수를 호출하여 access_token을 localStorage에 저장하고 'success'를 반환하세요.

  return 'fail'
}

export const getCurrentUserInfo = async (): Promise<UserInfo | null> => {
  // TODO(2-2): 로컬스토리지에서 토큰을 가져와 사용하기
  // GET, `${ BASE_URL }/profile`을 호출하세요.
  // 로컬 스토리지에 있는 token을 getAccessTokenFromLocalStorage로 가져와서 Authorization header에 Bearer token으로 넣어주세요.
  // API Spec은 강의 자료를 참고하세요.
  // 유저 정보 조회에 성공한 경우에는 UserInfo 타입의 값을 반환하세요.

  return null
}
