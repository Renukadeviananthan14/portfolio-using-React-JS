import React from 'react';
import Bg from './bg.png';

const Content = () => {
  return (
    <div class="container px-4 text-center">
  <div class="row gx-5">
    <div class="col">
     <div class="p-3"><h1>Hi, I'm Renuka Devi A</h1></div>
     <p class="web">Web Developer & Linux</p>
    </div>
    <div class="col">
      <div class="p-3"><img src={Bg} height="300px" width="250px"></img></div>
    </div>
  </div>
</div>
  );
};

export default Content;