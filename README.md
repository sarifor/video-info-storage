# Video Storage Info
좋아하는 영상의 정보를 올려서 다른 사용자들과 공유하는 사이트입니다.

## Getting Started
로컬 컴퓨터에서 Visual Studio Code로 프로젝트를 실행하는 방법에 대해 설명하겠습니다.

### Prerequisites
먼저 프로젝트를 실행하기 위한 환경을 마련합니다.

> 1. [git 최신판](https://git-scm.com/download/win) 다운로드/설치
> 2. [Visual Studio Code 최신판](https://code.visualstudio.com/#alt-downloads) 다운로드/설치
> 3. [Node.js 16.14.0](https://nodejs.org/download/release/v16.14.0/) 다운로드/설치 
> 4. Visual Studio Code를 실행하고, Ctrl + Shift + `로 터미널(git bash) 열어서, Git, Node.js, npm 설치 확인
>     - git -v 
>     - node -v
>     - npm -v

### Installing
환경이 마련되면, 깃허브에서 프로젝트를 다운로드하여, 프로젝트에 쓰이는 패키지를 설치하고 실행합니다.

> 5. git clone https://github.com/sarifor/video-info-storage.git
> 6. cd 커맨드로 저장소 폴더 안에 들어가서 npm install 실행하여, package.json에 기술되어 있는 패키지 설치
> 7. npm run dev:start로 프로젝트 실행
> 8. http://localhost:3000에 접속하여, 상단에 Video Storage Info라고 써 있는 화면이 뜨면 성공!
>    - 「すべてのパブリックネットワークとプライベートネットワークで、Windowsファイアウォールにより[パッケージ名]の機能のいくつかがブロックされています」のようなアラートが出たら、「プライベートネットワーク」にチェックを入れ「アクセスを許可する」をクリック
> 9. 환경변수를 사용하려면, db.js의 process.env.DB_URL과 index.js의 process.env.SESSION_SECRET의 코멘트아웃을 해제하고, .env_draft를 .env로 이름 변경 후 각 변수에 본인이 쓰는 값을 할당.
>    - AWS_ID = s3에 접속하기 위한 Amazon AWS Access Key 할당
>    - AWS_SECRET = s3에 접속하기 위한 Amazon AWS Secret key 할당
>    - DB_URL = MongoDB Atlas URL 할당
>    - NODE_MODULES_CACHE = false // 수정 불필요
>    - NPM_CONFIG_PRODUCTION = false // 수정 불필요
>    - SESSION_SECRET = 원하는 문자열 할당
> 10. Git 커맨드를 사용하려면, cd 커맨드로 저장소 폴더 안에 들어가서 아래와 같이 설정
>     - git init
>     - git config --global --add safe.directory 저장소 폴더 위치
>     - git config --global user.email "유저 메일 주소"
>     - git config --global user.name "유저 네임"


## Built With
* [Express]() - 웹 프레임워크
* [NPM]() - 의존성 관리

## Versioning
버전 관리법으로 [SemVer](http://semver.org/)을 사용하고 있습니다.

## Authors

* **Sarifor** - 프로젝트 구성, 구현, 트러블슈팅, 구현

## License

이 프로젝트는 MIT 라이센스를 준수합니다.