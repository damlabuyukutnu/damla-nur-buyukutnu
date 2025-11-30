# Seesaw Simulation

This project is an interactive seesaw simulation built with **HTML, CSS, and JavaScript**. Users can click on the plank to drop weights, see the resulting tilt angle, and track the total weights on each side.

<img width="696" height="805" alt="seesaw" src="https://github.com/user-attachments/assets/3def2944-ec77-44e6-80ed-59c793ffce33" />

## Thought Process and Design Decisions

### User Experience (UX) Focus
- The simulation was designed to be simple and intuitive.  
- When a weight is dropped, the tilt angle and the total weights on each side are displayed in real time.  
- Different colors for the weights improve visual tracking.

### Physical Modeling
- The tilt is calculated based on **torque (force × distance)** difference between the left and right sides.  
- The angle is limited to ±30° to prevent excessive tilting.

### Responsive Design
- Media queries were used to ensure proper display on desktop, tablet, and mobile devices.  
- Pivot, plank, and weight sizes were optimized according to screen width.

### Persistence with Local Storage
- The simulation state is saved in **localStorage** so that refreshing or closing the page does not reset the current state.

## Challenges and Limitations
- The simulation does **not use a full physics engine**; weights only affect the plank based on torque difference.  
- Weight dropping and collision animations are simple and not physically realistic.  
- Angle calculation is linear and does not include complex balance equations.

## AI Assistance
- AI tools were used **only for syntax suggestions and debugging**.  
- All core logic, calculations, and code structure were written entirely by me.  

## Live Demo
Check the live demo here:  
[https://damlabuyukutnu.github.io/damla-nur-buyukutnu/](https://damlabuyukutnu.github.io/damla-nur-buyukutnu/)

## Usage
1. Click on the plank to drop random weights.  
2. Track the weights on the left/right side and the tilt angle in the stats panel.  
3. Press the “Reset” button to clear the simulation and start over.
