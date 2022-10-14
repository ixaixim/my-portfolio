<!-- CSS styles -->
<style>
  .pic-row {
    display: flex;
    justify-content: space-evenly;
    align-items: flex-start;
    margin-top: 15px;
    margin-bottom: 20px;
  }
  .pic-container {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
  }
  .pic {
    height: 200px;
    padding: 0px;
    margin: 0px;
    /* border */
    border-radius: 1%;
    border-color: #CFCFCF;
  }
  .video {
    height: 250px;
    border-radius: 1%;
  }
  .caption {
    margin-top: 8px;
    font-style: italic;
    text-align: center;
    font-size: small;
  }
  /* specific styles */
  .robust_stack {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start; 
    height: 200px;
    border-radius: 1%;
  }
  .robust_pic {
    height: 97px;
    padding: 0px;
    margin: 0px;
    padding-right:5px;
    background-color: white;
    border-radius: 1%;
    border-color: #CFCFCF;
  }
</style>

## 2022

<!-- ADP: ex 2 pt 1,2,3 -->

### Differentiable Physics: a learnable Physics solver 

_[Chair for Graphics and Visualization, TU München](website)_

- Topic offered by Prof. Thuerey as part of the course _Advanced Deep Learning for Physics_
- Implemented and compared physics solvers based on a given potential landscape. Task: predict the trajectory of a point.
- A supervised learning solver: it is purely data-driven. Problem: leads to suboptimal solutions in case of multiple solutions.
- A differentiable physics solver: it is a data-driven learnable solver that also incorporates knowledge of the potential landscape. It is more accurate than the supervised technique. 

<span hidden>
Include three pictures on gdrive.
Maybe change the first picture by including also the upper trajectory.
introduce the phyisics solver: it will provide the baseline here.
comment on zig zag in pic3.
</span>

<span hidden>
notes ADP: 
given the landscape of a potential, and a starting point, where will the point end up?
We constraint the point to move across the x line by equivalent distances.
Along the y line we allow the potential to define the trajectory, since a force will be acting on the point.

Physics optimization: minimize the potential with respect to the y increment. (F_0) 
Depending on the initially sampled force we will have two possible symmetric paths followed (in picture is only represented one)

Supervised learning: we need to generate data samples, therefore provide synthetic data of the problem (e.g. by using the physics optimization). Problem: these paths will be of two kinds: one up and one down, depending on the initialization of the force.
Train a simple neural network to this data set.
Test input data is generated from the same input distribution. Plot: 25 different starting points from the same distribution as train data. Problem: the supervised network tries to incorporate both the upper and lower solution, resulting in suboptimal solutions.

Differentiable Physics: it is a data-driven model that also is aware of the potential landscape.Training works as follows: 
- predict y trajectory of batch through NN.
- compute potential of trajectory batch.
- update NN weights in order to reduce potential.
Zig-zag can be improved by using better NN hyperparams (here we used the same as the supervised case).

Goal of DP and supervised learning: solve a differential equation through data-driven techniques. The DP solves the problem of having multiple suboptimal solutions due to averaging of supervised techique.

What is the advantage of DP with respect to a classical solver? In this exercise there is no advantage since we use the classical solver as reference. Nonetheless, in more complex settings, the classical solution might not be accurate, and the DP solver could surpass this technique.

</span>

## 2021
<!-- CASE STUDIES: CASCOR -->

### Optimization of Artificial Neural Networks: Cascade Correlation Algorithm

_[Vitesco GmbH](website)_ and _[Chair of Numerical Mathematics, TU München ](website)_

- Supervised by Dr. T. Köpple, MSc. G.Gutierrez.
- Building an **optimal** Artificial Neural Network (ANN), with a minimal number of layers and neurons, that does not overfit the data.
- Goal: develop an ANN able to run on a small engine processor with a limited amount of memory. The ANN predicts temperature of the vehicle's engine.
- Cascade Correlation Neural Network is both an architecture and a family of learning algorithms: it begins with a minimal network structure and then trains and **adds automatically units**, one at a time, optimizing residual correlations.

<span hidden> pictures: 
prediction (last picture from report), and this pic https://www.google.com/url?sa=i&url=https%3A%2F%2Ftowardsdatascience.com%2Fcascade-correlation-a-forgotten-learning-architecture-a2354a0bec92&psig=AOvVaw22CIi2HetqtBKnFT9qre2W&ust=1665592532396000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCMC17O_N2PoCFQAAAAAdAAAAABAE </span>





<!-- STATISTICAL LEARNING: EXERCISE 8 -->

### Comparison of simple classifiers

_[Chair of Mathematical Modeling of Biological Systems, TU München](website)_

- Topic offered by Prof. Theis as part of the course _Statistical Learning_.
- Comparison of different classifiers: Linear Support Vector Machine (SVM), Radial Basis Function (RBF) SVM, Decision Tree, Random Forest and AdaBoost.
- This exercise shows the limitations of linear classifiers (Linear SVM) against kernel classifiers (RBF SVM) and exposes the overfitting behavior of single classifiers (Decision Trees) against ensemble methods of bagging (Random Forest) and boosting (AdaBoost).


<span hidden> include image of exercise. </span>




<!-- SIMULATION OF SEMICONDUCTORS PROPERTIES-->

### Investigation of Silicon Properties using the Quantum Espresso simulation environment

_[Associate Professorship Simulation of Nanosystems for Energy Conversion, TU München](https://www.ee.cit.tum.de/sne/home/)_

- Supervised by M. Rinderle, I. Kouroudis. Collaborated with J. Schwend. 
- Performed self-constistent calculations to obtain density of states (DOS) and bandstructure of Silicon.
- Used different types of exchange-correlation functionals to obtain finer results in bandgap calculation.

<span hidden>
include pictures of silicon crystal structure, density of states, bandgap.
</span>

<span hidden>
description of project: use the Quantum Expresso suite to perform DFT simulations on a simple material such as silicon.
Introduction of problem: want to compute the energy states of a quantum mechanical object. The energy states are available only after solving for the wavefunction through its Schroedinger equation.
DFT does this: it solves approximately the Scroedinger equation for such system.
It relies on a theorem by Hohenberg and Kohn, according to which the lowest state energy of a system is a functional of the density of electrons.
DFT relies on a self consistent scheme to solve the wave equation: Solve the Kohn-Sham equations for single electrons and then confront the initial density with the density obtained from the current wavefunction.

What is an exchange correlation functional? It is the term in the Schroedinger eq. that takes care of spin and residual electron-electron interactions. Quantum Expresso needs to approximate this term.
</span>


<span hidden>
TODOs: 
- add websites, check chair names are correct.
- add a comment section or document where can expand on these topics on your portfolio. 
</span>


## 2019

<!-- BACHELOR THESIS -->


### Study of parameters that influence radiative transfer in the atmosphere

_[Condensed Matter Physics Group, Università degli Studi di Milano](https://www.fisica.unimi.it/ecm/home/ricerca/gruppi-di-ricerca/fisica-della-materia-condensata)_

- Supervised by Prof. Potenza.
- The greatest challenge in climate research is to determine the effect of light when small particles (aerosol) are present in the atmosphere.
- Studied sensibility of diffused irradiance due to presence in the atmosphere of different antarctic mineral aerosol dust.  
- Carried radiative transfer simulations to determine influence of three crucial aerosol parameters: phase function, extinction cross section and single scattering albedo.

<span hidden> 
image of radiative forcing from IPCC (last part of thesis), and pg. 29 thesis, first figure: relative differences due to different shapes of aerosols influences irradiance, especially at sea level. 
</span>