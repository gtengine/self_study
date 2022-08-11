# 차량검사소(VIS) 예약 관리 플랫폼

차량검사소(vehicle inspection station) 예약 관리 플랫폼

# 개발환경

- 언어: Node.js 16.16.0 LTS
- Front-End: Expo(React-Native)
- Back-End: Nest.js

## 프로젝트 구성

- Front-End: Expo 기반의 프론트 엔드 개발 소스 코드
- Back-End: Next.js 기반의 백엔드 개발 소스 코드
- Proxy-Server: Nginx 기반의 프록시 서버 설정

## 관련 공유 문서

- [이슈 관리 대장](https://devmk.quickconnect.to/oo/r/pjWa9wzKnTntolJOxv3Jex3EMdpw8h83)
- [프론트 엔드 설계](https://devmk.quickconnect.to/oo/r/pjWiJyNsU6vthkfaAo4vp8O2ZP7MrKkP)

## 사내 로컬 서버 사용법

로컬 서버에 복수의 개발자가 동시에 개발을 진행하기 위해서는 각기 다른 전용 포트의 제공이 필요함
각 개발자에게 할당되는 포트 정보는 이슈 관리 대장의 자원 시트를 활요한다.

- SSH Port: SSH 접속 및 VSCode 설정에 필요
- NginX Port: 프론트 엔드 개발 및 테스트에 필요
- Front-End Port: 프론트 엔드 개발에 필요