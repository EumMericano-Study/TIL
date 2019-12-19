## Linear Predictor

머신러닝 : 인공지능의 한 분야  /  컴퓨터가 학습할 수 있도록 알고리즘과 기술을 개발하는 분야.
>  - 지도학습
>  - 비지도학습

>  - 예측  
> -  개선
> -  자동화


data 를 이용하여  f를 구한다


<img src=./image/linear2.png>


<img src=./image/Machine_Learning.png>

### 1 Reflex Model : 반응형 모델

> 예측에서 해야할 일 
> 1. 예측값의 형태를 결정
> 2. 어떻게 학습시킬 것인가.


#
모델의 종류

Classification : 카테고리화  (학점 시스템, True or False)

<img src=./image/classification.png>

Ranking : 순위화 

<img src=./image/ranking.png>

Structured prediction : 수치화 / 구조화  ( 문자열 번역, 개미의 주식가격 예측 )

<img src=./image/prediction.png>


#
### Linear Prediction
> 가장 쉬운 Machine Learning 

선형예측을 통해 각 특성들의 관계를 파악한다.
가장 구현하기 쉽고, 많은 모델에 적용할 수 있다.



--  메일주소 구분  --

필요한 데이터 :   입력값,  True or False 값들의 List

출력 : True or False

#### abc@gmail.com

입력 :  이메일 Data
출력 :  True of False
목적 : 분류기 f(함수) 추출


사용되는 개념 3가지
>Feature vector 
>Weight vector
>Score

#### Feature vector : 특성에 대한 조건

<img src=./image/FE.png>
<img src=./image/FEV.png>

해당 Data의 특성을 추출한 후 벡터에 매핑한다.
해당 지점의 특성을 고차원 공간의 점으로 표현할 수 있다.
이를 이용하여 해당 점과 결과값들의 비중을 비교하여
특성에 대한 가중치를 예측할 수 있다.


#### Weight vector : 각 항목에 대한 가중치

<img src=./image/W.png>

해당 항목이 얼마나 결과값에 영향을 미치는지에 대한 정보

해당값이 양수이면 True값이 출력되도록 결과값에 기여하고, 

반대로 음수라면 False값이 출력되도록 결과값에 기여하게 된다.


*특성벡터는 input값에 의존하지만 가중벡터는 내부 알고리즘에 의존적이다.


#### Score :  분류에 사용될 결과 값
<img src=./image/Score.png>


<img src=./image/ScoreC.png>


해당 Data가 해당 f에서 어떤 결과를 가지게 되었는지 표시
이를 통해 카테고리화 / 수치화 할 수 있다.



카테고리화를 할때는 Decision boundary를 만들어 진행한다.

#### * Decision boundary
특성 벡터가 2차원 배열 이상이라면?

결정경계 (Decision boundary)를 통해 해당 값이 어느쪽에 더 적합한지 분류한다.
결정경계는 Feature vector 보다 1차원 높은 형태로 존재해야 한다.

<img src=./image/DB.png>

<!--stackedit_data:
eyJoaXN0b3J5IjpbMjYwNjY1MTUyLC0xMDMyNzA4NTI4LC0yNj
MwODAwNjIsLTM2NDE4NzU1NCwtOTYyMTM2Mzk3LC0zODk4MTM3
MjgsLTEwOTA4MDU2OTQsMTg5ODYxNjg1OCwxMTcxMzMwODIsOT
A4NDY5ODE3LC02NTc1MjcwNzgsMTUxMDI1NjI2NCwtNTk4NzY5
MTY0LDE4NTM1MjI0MDksLTIwODg3NDY2MTJdfQ==
-->