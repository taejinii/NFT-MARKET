# NFT 거래소 - QWERO

![화면_기록_2023-07-03_오후_3_10_41_AdobeExpress](https://github.com/taejinii/NFT-MARKET/assets/96623949/17202cc2-bc22-4555-b90b-9179a4d5a70b)

# Description

평소 좋아하는 주제를 사용하였으며 개발능력 향상을 위한 NFT 거래소 프로젝트입니다. Next 13버전을 사용하였으며 app directory로 구현하였습니다.

# Develop

<div>

![Next.js](https://img.shields.io/static/v1?style=for-the-badge&message=Next.js&color=000000&logo=Next.js&logoColor=FFFFFF&label=)
![React](https://img.shields.io/static/v1?style=for-the-badge&message=React&color=222222&logo=React&logoColor=61DAFB&label=)
![TypeScript](https://img.shields.io/static/v1?style=for-the-badge&message=TypeScript&color=3178C6&logo=TypeScript&logoColor=FFFFFF&label=)
![React Query](https://img.shields.io/static/v1?style=for-the-badge&message=React+Query&color=111827&logo=React+Query&logoColor=EF4444&label=)
![Redux Toolkit](https://img.shields.io/static/v1?style=for-the-badge&color=333&message=Redux+Toolkit&logo=Redux&logoColor=593D88&label=)

</div>

# Styling<br/>

<div>
	
![tailwindcss](https://img.shields.io/static/v1?style=for-the-badge&color=06B6D4&message=tailwindcss&logo=tailwindcss&logoColor=FFFFFF&label=)

</div>

# Testing<br/>

<div>

![Cypress](https://img.shields.io/static/v1?style=for-the-badge&color=17202C&message=cypress&logo=cypress&logoColor=FFFFFF&label=)

</div>

## 🌳 폴더 구조

```
📦
├─ api:API호출 함수 보관 폴더
├─ app:Next.js의 페이지 라우팅 app 폴더
├─ components
│  ├─ page : 도메인별 필요한 컴포넌트 폴더
│  └─ ui: 공통 컴포넌트 폴더
├─ constant: 상수 보관 폴더
├─ cypress: 테스트코드 보관 폴더
├─ hooks
│  ├─ common: 일반적인 커스텀훅 보관 폴더
│  └─ queries: React-query 를 사용하여 데이터를 fetch할시 커스텀훅 보관하는 폴더
├─ public
│  ├─ icons:svg 파일 보관하는 폴더
│  ├─ images: static한 이미지 보관 폴더
├─ store: Redux slice ,store 관리 폴더
├─ styles: 스타일 정의 폴더
├─ types: 타입 정의 폴더
└─ utils: 유틸 함수 보관하는 폴더

```

# 구현기능

<table>
	<tbody>
		<tr>
			<th>NFT 컬렉션 랭킹 리스트 </th>
			<th>컬렉션 상세 페이지 </th>
		</tr>
		<tr>
		<td><img width="400" alt="image" src="https://github.com/taejinii/NFT-MARKET/assets/96623949/252eed02-8473-40fc-89b4-cc21370f32ef"/></td>
		<td><img width="400" alt="image" src="https://github.com/taejinii/NFT-MARKET/assets/96623949/c70b0cef-0480-4d1d-a64e-8937042037a0"/></td>
		</tr>	
    <tr>
      <td> - 시간대별 거래량에 따른 랭킹 리스트 렌더링</td>
      <td> - 컬렉션 정보 확인 가능,컬렉션 리스트 무한스크롤</td>
    </tr>
    		<tr>
			<th>NFT 상세페이지</th>
			<th>NFT 거래기록</th>
		</tr>
		<tr>
			<td><img width="400" alt="image" src="https://github.com/taejinii/NFT-MARKET/assets/96623949/930d7d15-9eb2-436d-a802-8724b318f3af"/></td>
			<td><img width="400" alt="image" src="https://github.com/taejinii/NFT-MARKET/assets/96623949/b9d8d958-852c-4a4b-80bd-fb4e9fb14dcf"/></td>
		</tr>		
      <tr>
      <td> - NFT Trait,Owner 정보 렌더링</td>
      <td> - 해당 NFT의 거래기록 확인가능</td>
    </tr>
        		<tr>
			<th>마이페이지</th>
			<th>징바구니</th>
		</tr>
		<tr>
			<td><img width="400" alt="image" src="https://github.com/taejinii/NFT-MARKET/assets/96623949/ddd4f110-e497-4f58-b6ca-26f98d8cda11"/></td>
			<td><img width="400" alt="image" src="https://github.com/taejinii/NFT-MARKET/assets/96623949/9963dc1d-42cd-49b5-b30e-66b0088a9479"/></td>
</td>
		</tr>	
      <tr>
      <td> - 유저가 현재 가지고있는 NFT리스트 무한스크롤</td>
	 <td> - 장바구니 추가 제거 기능</td>
    </tr>
    <tr>
			<th>사이드바 모달</th>
		</tr>
		<tr>
			<td><img width="400" alt="image" src="https://github.com/taejinii/NFT-MARKET/assets/96623949/1d914437-3f7d-443d-ae9c-ccb32c87a55c"/>
</td>
        <tr>
      <td> - 지갑연결후 지갑정보 및 기타메뉴 렌더링</td>
    </tr>
</td>
		</tr>	
    </tbody>
</table>
