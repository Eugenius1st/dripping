# dripping

![KakaoTalk_Photo_2024-08-23-16-59-12 002](https://github.com/user-attachments/assets/bd76f5ec-527d-42c2-9ca9-dddc47fa6f95)
![KakaoTalk_Photo_2024-08-23-16-59-12 003](https://github.com/user-attachments/assets/5abd5f7f-88e7-41e1-a713-8eb3634692b5)

# 앱의 업데이트된 모습 확인하기

1. Expo Go 앱 설치: 앱 스토어에서 Expo Go 앱을 설치하세요. Expo Go는 iOS와 Android 모두에서 사용할 수 있습니다.
2. 앱 실행: Expo Go 앱을 열고, 로그인을 하지 않았다면 Expo 계정으로 로그인하세요. 로그인한 후, 프로젝트 대시보드에서 해당 프로젝트를 선택할 수 있습니다.
3. QR 코드 스캔 (Optional): 만약 Expo Dev Tools에서 QR 코드를 제공하는 경우, 이를 스캔하여 앱에 접근할 수도 있습니다.
4. EAS Update 적용: eas update 명령어를 사용하여 프로젝트를 빌드하고, 앱에 변경 사항을 배포합니다.
   (EAS Dashboard https://expo.dev/accounts/eugenius1st/projects/dripping/updates/f776fca1-983d-4c1b-a7c6-e12550b5c7bc)

-   eas update --branch <branch-name>
    이 명령어는 변경된 내용을 특정 브랜치에 배포합니다. 배포 후, Expo Go 앱에서 업데이트된 내용을 자동으로 확인할 수 있습니다. 사용자는 새로 배포된 업데이트를 다운로드하여 앱의 최신 상태를 확인할 수 있습니다.

-   Release Channel 사용 (Optional): 만약 특정 릴리스 채널에서만 업데이트를 확인하고 싶다면, EAS Update에서 릴리스 채널을 설정하여 배포할 수 있습니다.

-   eas update --branch <branch-name> --message "Update description"
    앱에서 업데이트 확인: Expo Go 앱에서 프로젝트를 열면 최신 업데이트가 자동으로 로드됩니다. 사용자는 앱을 종료했다가 다시 열면 업데이트된 앱의 모습을 확인할 수 있습니다.

# 실시간으로 앱 확인하기

만약 개발 중인 상태에서 바로바로 앱의 모습을 확인하고 싶다면, Hot Reloading 기능을 이용할 수 있습니다. expo start 명령어를 통해 로컬에서 앱을 실행하고, 변경 사항을 실시간으로 반영할 수 있습니다.

## 터미널에서 다음 명령어를 실행합니다:

-   expo start
-   Expo Dev Tools가 열리고, QR 코드가 표시됩니다. 이를 Expo Go 앱으로 스캔하면 앱의 최신 상태를 실시간으로 확인할 수 있습니다.
-   코드 변경 후 저장하면, 앱이 자동으로 업데이트되어 변경 사항을 즉시 확인할 수 있습니다.
-   이 과정을 통해 앱의 업데이트된 내용을 Expo Go에서 쉽게 확인할 수 있으며, EAS Update를 통해 빠르게 배포된 변경 사항을 테스트할 수 있습니다.
