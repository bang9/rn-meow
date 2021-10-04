## 설치 및 실행

### 환경변수 설정

-   프로젝트 루트의 `.env.sample` 파일을 복사하여 `.env` 파일을 생성하고, 환경변수를 채워넣습니다.
-   `yarn set:env` 명령어로 런타임용 환경변수 파일을 추출합니다.

### 의존성 설치

-   `yarn install` 명령어로 node modules 의존성을 설치합니다.
-   `npx pod-install` 혹은 `cd ios && pod install` 로 cocoapods 의존성을 설치합니다.

### 실행

-   `yarn ios` 명령어로 앱을 실행합니다.
-   만약 xcodebuild 과정에서 에러가 발생한다면, `npx react-native run-ios` 명령어 혹은 xcode 를 통해서 실행합니다.

---

## 환경변수 추가

-   `src/utils/util.environment` 파일의 `ENV_LIST` 에 추가할 키를 업데이트 합니다.
-   `.env.sample` 파일을 업데이트합니다.
-   `.env` 파일에 환경변수를 채워넣습니다.
