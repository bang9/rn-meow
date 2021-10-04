## 설치 및 실행

### 의존성 설치

-   `yarn install` 명령어로 node modules 의존성을 설치합니다.
-   `npx pod-install` 혹은 `cd ios && pod install` 로 cocoapods 의존성을 설치합니다.

### 환경변수 설정

-   프로젝트 루트의 `.env.sample` 파일을 복사하여 `.env` 파일을 생성하고, 환경변수를 채워넣습니다.
-   `yarn env:dev` 명령어로 런타임용 환경변수 파일을 추출합니다.

### 실행

-   `yarn ios` 혹은 `yarn android` 명령어로 앱을 실행합니다.
-   만약 빌드 과정에서 에러가 발생한다면, `npx react-native run-ios` `npx react-native run-android` 명령어 또는 Xcode/Android Studio 를 통해서 실행합니다.

## 환경변수 추가

-   `src/utils/util.environment` 파일의 `ENV_LIST` 에 추가할 키를 업데이트 합니다.
-   `.env.sample` 파일을 업데이트합니다.
-   `.env` 파일에 환경변수를 채워넣습니다.
-   `yarn env:dev` 명령어를 실행합니다.
