# Stochastic gradient descent

<img src=./image/roadmap.png>


목표: TrainLoss의 최소값을 찾는것.


<img src=./image/trainLoss0.png>


<img src=./image/trainLoss.png>


> Q. 최적화 방법은? 
>  A. 일정 크기(Step Size)만큼 TrainLoss그래프를 확인하는 것! 

#### Gradient Descent

<img src=./image/GD.png>
 
반복 최적화를 통해 최적 w를 구한다.
Train Data의 미분값의 전체 평균을 구한다.

<img src=./image/gradientSol.png>


Gradient Descent
> Too Slow....


<img src=./image/ele.png>

매 step마다 모든 Train Data를 살펴본다.

#### Stochastic Gradient Descent

<img src=./image/bird.png>

```
데이터의 양이 많아지면, 평균에 더 가까워진다.
```

<img src=./image/SGD_GD.png>


<img src=./image/stepsize.png>

기본적으로 설정되는 스텝사이즈는 0.1,
Step Size를 조정한 횟수 만큼 step size를 조정한다.

<img src=./image/zeroone.png>


classification의 기울기는 항상 0 or 1이다.
값이 변하는 위치에서 margin을 1만큼 증가시킨 기울기 중 최대값을 구한다. (최대값이 최종 기울기가 된다.)

<img src=./image/HingeLoss.png>


<!--stackedit_data:
eyJoaXN0b3J5IjpbLTQ4MzcxMzE5MywtMTkzNjEyNDU3NV19
-->