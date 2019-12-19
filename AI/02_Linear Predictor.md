## Linear Predictor

머신러닝 : 인공지능의 한 분야  /  컴퓨터가 학습할 수 있도록 알고리즘과 기술을 개발하는 분야.
> 학습 방법 
>  - 지도학습
>  - 비지도학습

> 결과 형태
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


모델의 종류

Classification : 등급화  (학점 시스템, True or False)

<img src=./image/classification.png>

Ranking : 순위화 

<img src=./image/ranking.png>

Regression : 수치화 / 구조화  ( 문자열 번역, 개미의 주식가격 예측 )

<img src=./image/prediction.png>



#
### Linear Prediction
> 가장 쉬운 Machine Learning 

선형예측을 통해 각 특성들의 관계를 파악한다.
가장 구현하기 쉽고, 많은 모델에 적용할 수 


--  스팸메일 분류기   --

필요한 데이터 :   입력값,  True or False 값 
출력 : True or False

<img src=./image/email.png>

입력 :  이메일 Data
출력 :  True of False
목적 : 분류기 f(함수) 추출


사용되는 2가지 vector 
>Feature vector & Weight vector

Feature vector : 특성에 대한 조건

<img src=./image/FE.png>
<img src=./image/FEV.png>

해당 Data의 특성을 추출한 후 벡터로 관리한다.
해당 지점의 특성을 고차원 공간의 점으로 표현할 수 있다.
이를 이용하여 해당 점과 결과값들의 비중을 비교하여
특성에 대한 가중치를 예측할 수 있다.

Weight vector : 각 항목에 대한 가중치

<!--stackedit_data:
eyJoaXN0b3J5IjpbLTE5MDMzODU1MDYsLTk2MjEzNjM5NywtMz
g5ODEzNzI4LC0xMDkwODA1Njk0LDE4OTg2MTY4NTgsMTE3MTMz
MDgyLDkwODQ2OTgxNywtNjU3NTI3MDc4LDE1MTAyNTYyNjQsLT
U5ODc2OTE2NCwxODUzNTIyNDA5LC0yMDg4NzQ2NjEyXX0=
-->