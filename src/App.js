import React from 'react';
import './octicons.min.css';
import './sweetalert.min.css';

class App extends React.Component {


  handleclick(){
    console.log("Start button pushed");
  
    var o = {};
  
    // Can hint connection type
    // from 0..
    // ["GPRS", "3G", "4G", "WiFi", "Wireless", "Satellite", "DSL", "Cable", "Fiber", "", "Unsure"];
    // undefined == Unsure
    o.conntype = undefined;
    // for complete results, bufferbloat must be true
    // for faster results lacking grades and URL etc
    // set to false
    o.bufferbloat = true;
    
    // hz can be 4 (fastest), 2 (default) or 1 (slowest)
    // determines speed that onstatus is called
    o.hz = 4; 
  
    o.apiKey = '12345678'; // Test API key
  
    // fired continuously with basic info
    o.onstatus = function(e) {
      if (e.direction)
        console.log(e.direction + " megabit/sec: down/up " + e.down + " / " + e.up + " ping=" + e.ping + "ms");
         document.getElementById('down').innerHTML = Math.round(e.down);
          document.getElementById('up').innerHTML =  Math.round(e.up);
          document.getElementById('ping').innerHTML = e.ping;
           
          
        
        
    };
  
    // fired at 1hz with progress guesstimate
    o.onprogress = function(o) {
      document.getElementById('status').innerHTML = o.doing + " Progress:" + o.progress + "%";
      if(o.progress===100)
      {
        var element = document.getElementById("startbutton");
        element.classList.remove("active");
        //alert("complee");
      }
    };

    o.onerror = function(o) {
      // this also marks the test end. oncomplete is not fired
      alert(o.msg);
    };
  
    // fired once upon successful conclusion
    // o has results.. see log for json version of structure
    o.oncomplete = function(o) {
      var s = JSON.stringify(o);
      console.log("oncomplete fired " + s);
      document.getElementById('ip').innerHTML = o.ip;
      document.getElementById('jitter').innerHTML = Math.round(o.jitter);
       document.getElementById('nearest').innerHTML = o.nearest;
       var strr = o.grades
       var str=strr.split(/[\s,]+/)
        document.getElementById('grades').innerHTML =str[str.length-1];
        
        document.getElementById('dns').innerHTML = o.dns;
        
        
      
    };
  
    // fired if the test wants to ask a question of the user with
    // a YES/NO answer.
    o.onconfirm = function(s) {
      return window.confirm(s);
    }; 
    
    // pass any user data in, it is stored 
    // and also returned with result.
    o.udata = { "myuserfield": "myvalue" };
  
    window.dslr_speedtest({
      op: 'start',
      params: o
    }); 
  }
  render() {
    return (
      <div>
      <section className="c-main-wr">
        <div className="c-main-con">
          <div className="row">
            <div className=" c-main-box2">
              <div className="c-main-box-img">
                <picture>
                  <source srcSet="img/banner-img.webp" type="image/webp" alt="" />
                  <source srcSet="img/banner-img.jpg" type="image/jpg" alt="" />
                  <img src="img/banner-img.jpg" alt="" /> </picture>
              </div>
            </div>
            <div className=" c-main-box1">
              <div className="c-speedtest-main">
                <div className="c-speed-main">
                  <div className="c-speedtest-heading">
                    <h3>Speed &amp; Quality tester</h3>
                    {/*<h4>Your Internet speed is </h4>*/} 
      
      <button  className="c-refrash-icon-new"  id='startbutton' onClick={this.handleclick}>
<div class="c-refrash-icon-in">
<span class="c-refrash-play">
<svg enable-background="new 0 0 320.001 320.001" version="1.1" viewBox="0 0 320 320" xml:space="preserve" xmlns="http://www.w3.org/2000/svg">
<path d="m295.84 146.05-256-144c-4.96-2.784-11.008-2.72-15.904 0.128-4.928 2.88-7.936 8.128-7.936 13.824v288c0 5.696 3.008 10.944 7.936 13.824 2.496 1.44 5.28 2.176 8.064 2.176 2.688 0 5.408-0.672 7.84-2.048l256-144c5.024-2.848 8.16-8.16 8.16-13.952s-3.136-11.104-8.16-13.952z"/> </svg>
</span>
<div class="c-wave-wr">
  <div class="wave"></div>
  <div class="wave"></div>
</div>
<span class="c-refrash-push">
</div>
 </button>
                    </div>
                  <div className="c-speed-headeing">
                    <h4> Download <span>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="-49 141 512 512" xmlns="https://vecta.io/nano">
                          <path d="M449.966 480.95c-7.197 0-13.034 5.835-13.034 13.034v49.804c0 28.747-23.388 52.135-52.135 52.135H29.203c-28.747 0-52.135-23.388-52.135-52.135v-49.804c0-7.2-5.835-13.034-13.034-13.034S-49 486.785-49 493.983v49.804C-49 586.908-13.918 622 29.203 622h355.594c43.12 0 78.203-35.082 78.203-78.203v-49.804c0-7.198-5.835-13.033-13.034-13.033z" />
                          <path d="M43.167 558.372h327.665c7.2 0 13.034-5.835 13.034-13.034s-5.835-13.034-13.034-13.034H43.167c-7.197 0-13.034 5.835-13.034 13.034s5.836 13.034 13.034 13.034z" fill="#ff0201" />
                          <path className="c-arow-animation" d="M93.484 297.272l100.482-89.764v252.6c0 7.2 5.837 13.034 13.034 13.034s13.034-5.835 13.034-13.034v-252.6l100.482 89.764c2.486 2.22 5.588 3.315 8.678 3.315 3.583 0 7.15-1.47 9.726-4.35a13.04 13.04 0 0 0-1.037-18.404L228.71 180.3c-12.376-11.055-31.04-11.057-43.417 0L76.117 277.83c-5.37 4.795-5.833 13.035-1.037 18.404s13.033 5.835 18.404 1.038z" />
                        </svg>
                      </span> </h4>
                    <h1> <span id="down">0</span> <dfn> Mbps </dfn> </h1>
                  </div>
                </div>
                <div className="c-latency-main">
                  <div className="c-speed-box c-upload-box">
                    <h4> Upload <span>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="-49 141 512 512" xmlns="https://vecta.io/nano">
                          <path d="M449.966 480.95c-7.197 0-13.034 5.835-13.034 13.034v49.804c0 28.747-23.388 52.135-52.135 52.135H29.203c-28.747 0-52.135-23.388-52.135-52.135v-49.804c0-7.2-5.835-13.034-13.034-13.034S-49 486.785-49 493.983v49.804C-49 586.908-13.918 622 29.203 622h355.594c43.12 0 78.203-35.082 78.203-78.203v-49.804c0-7.198-5.835-13.033-13.034-13.033z" />
                          <path d="M43.167 558.372h327.665c7.2 0 13.034-5.835 13.034-13.034s-5.835-13.034-13.034-13.034H43.167c-7.197 0-13.034 5.835-13.034 13.034s5.836 13.034 13.034 13.034z" fill="#ff0201" />
                          <path className="c-arow-animation" d="M93.484 297.272l100.482-89.764v252.6c0 7.2 5.837 13.034 13.034 13.034s13.034-5.835 13.034-13.034v-252.6l100.482 89.764c2.486 2.22 5.588 3.315 8.678 3.315 3.583 0 7.15-1.47 9.726-4.35a13.04 13.04 0 0 0-1.037-18.404L228.71 180.3c-12.376-11.055-31.04-11.057-43.417 0L76.117 277.83c-5.37 4.795-5.833 13.035-1.037 18.404s13.033 5.835 18.404 1.038z" />
                        </svg>
                      </span> </h4>
                    <ul>
                      <li> 
                        {/*<h3>Speed</h3>*/}
                        <h5><span id="up">0</span>Mbps</h5>
                      </li>
                    </ul>
                  </div>
                  <div className="c-speed-box">
                    <h4> Quality <span>
                        <svg viewBox="-66 0 511 511.99925" xmlns="http://www.w3.org/2000/svg">
                          <g fill="true">
                            <path d="m40.5 190c0 82.710938 67.289062 150 150 150s150-67.289062 150-150-67.289062-150-150-150-150 67.289062-150 150zm150-130c71.683594 0 130 58.316406 130 130s-58.316406 130-130 130-130-58.316406-130-130 58.316406-130 130-130zm0 0" />
                            <path fill="#ed2024" d="m97.890625 172.171875 38.761719 38.191406-8.917969 53.675781c-.621094 3.738282.921875 7.503907 3.988281 9.730469 3.0625 2.226563 7.121094 2.527344 10.484375.785157l48.292969-25.078126 48.289062 25.078126c3.335938 1.730468 7.394532 1.460937 10.484376-.785157 3.066406-2.226562 4.609374-5.992187 3.988281-9.730469l-8.917969-53.675781 38.761719-38.191406c2.699219-2.65625 3.664062-6.609375 2.492187-10.214844-1.171875-3.601562-4.277344-6.230469-8.023437-6.796875l-53.792969-8.097656-24.339844-48.675781c-1.691406-3.386719-5.15625-5.527344-8.941406-5.527344-3.789062 0-7.25 2.140625-8.945312 5.527344l-24.339844 48.675781-53.792969 8.097656c-3.746094.5625-6.851563 3.195313-8.023437 6.796875-1.171876 3.605469-.203126 7.558594 2.492187 10.214844zm67.4375-6.105469c3.21875-.484375 6-2.503906 7.457031-5.414062l17.714844-35.433594 17.714844 35.433594c1.457031 2.910156 4.238281 4.929687 7.457031 5.414062l39.152344 5.894532-28.214844 27.792968c-2.316406 2.285156-3.378906 5.554688-2.847656 8.765625l6.492187 39.066407-35.148437-18.25c-1.441407-.75-3.023438-1.125-4.605469-1.125s-3.164062.375-4.609375 1.125l-35.148437 18.25 6.492187-39.066407c.535156-3.210937-.527344-6.480469-2.847656-8.765625l-28.210938-27.792968zm0 0" />
                            <path d="m200.5 10c0 5.523438-4.476562 10-10 10s-10-4.476562-10-10 4.476562-10 10-10 10 4.476562 10 10zm0 0" />
                            <path d="m143.371094 5.894531c-84.121094 21.472657-142.871094 97.179688-142.871094 184.105469 0 53.988281 22.699219 104.859375 62.546875 140.886719l-60.246094 106.175781c-1.9375 3.417969-1.695312 7.652344.617188 10.824219 2.3125 3.175781 6.265625 4.703125 10.113281 3.902343l68.417969-14.207031 24.046875 67.761719c1.304687 3.6875 4.644531 6.269531 8.542968 6.617188 3.898438.347656 7.636719-1.617188 9.570313-5.019532l66.390625-116.71875 66.386719 116.71875c1.789062 3.144532 5.117187 5.054688 8.6875 5.054688.292969 0 .589843-.011719.882812-.035156 3.898438-.347657 7.238281-2.933594 8.546875-6.617188l24.042969-67.761719 68.417969 14.207031c3.84375.796876 7.800781-.730468 10.113281-3.902343 2.316406-3.171875 2.554687-7.40625.617187-10.824219l-60.246093-106.175781c39.847656-36.027344 62.546875-86.898438 62.546875-140.886719 0-86.925781-58.75-162.632812-142.867188-184.105469-5.355468-1.367187-10.796875 1.863281-12.164062 7.214844-1.367188 5.351563 1.863281 10.796875 7.214844 12.164063 75.257812 19.210937 127.820312 86.949218 127.820312 164.726562 0 94.660156-76.878906 170-170 170-93.1875 0-170-75.402344-170-170 0-77.777344 52.558594-145.515625 127.816406-164.726562 5.351563-1.367188 8.582032-6.8125 7.21875-12.164063-1.367187-5.351563-6.808594-8.582031-12.164062-7.214844zm-25.835938 472.160157-19.652344-55.378907c-1.671874-4.710937-6.5625-7.464843-11.457031-6.449219l-55.324219 11.488282 47.679688-84.03125c27.800781 20.210937 60.71875 32.523437 94.949219 35.570312zm177.035156-61.828126c-4.890624-1.015624-9.785156 1.738282-11.457031 6.449219l-19.648437 55.378907-56.199219-98.800782c34.234375-3.046875 67.148437-15.359375 94.953125-35.570312l47.679688 84.03125zm0 0" />
                          </g>
                        </svg>
                      </span> </h4>
                    <ul>
                      <li>
                        <h3>Ping</h3>
                        <h5><span id="ping">0</span>Ms</h5>
                      </li>
                      <li>
                        <h3>Jitter</h3>
                        <h5><span id="jitter">-</span></h5>
                      </li>
                      <li>
                        <h3> Buffer Bloat</h3>
                        <h5><span id="grades">-</span></h5>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="c-info-box">
                  <h4> <span>
                      <svg enableBackground="new 0 0 512.001 512.001" version="1.1" viewBox="0 0 512 512" xmlSpace="preserve" xmlns="http://www.w3.org/2000/svg">
                        <path d="m424 348h-80c-18.748 0-34 15.252-34 34s15.252 34 34 34h80c18.748 0 34-15.252 34-34s-15.252-34-34-34zm0 48h-80c-7.72 0-14-6.28-14-14s6.28-14 14-14h80c7.72 0 14 6.28 14 14s-6.28 14-14 14z" />
                        <path d="m462 284h-67.996v-85.25c0-5.523-4.477-10-10-10s-10 4.477-10 10v85.25h-202c-5.523 0-10 4.477-10 10s4.477 10 10 10h290c16.544 0 30.004 13.46 30.004 30.004v95.992c0 16.544-13.46 30.004-30.004 30.004h-411.99c-16.544 0-30.004-13.46-30.004-30.004v-95.992c0-16.544 13.46-30.004 30.004-30.004h37.996c5.523 0 10-4.477 10-10s-4.477-10-10-10h-37.996c-27.572 0-50.004 22.432-50.004 50.004v95.992c0 27.572 22.432 50.004 50.004 50.004h3.996v22c0 5.523 4.477 10 10 10h80c5.523 0 10-4.477 10-10v-22h204v22c0 5.523 4.477 10 10 10h80c5.523 0 10-4.477 10-10v-22h3.996c27.572 0 50.004-22.432 50.004-50.004v-95.992c0-27.572-22.432-50.004-50.004-50.004zm-328 208h-60v-12h60v12zm304 0h-60v-12h60v12z" />
                        <path d="m138.32 286.93c-1.86-1.86-4.44-2.93-7.07-2.93s-5.21 1.07-7.07 2.93-2.93 4.44-2.93 7.07 1.07 5.21 2.93 7.07 4.44 2.93 7.07 2.93 5.21-1.07 7.07-2.93 2.93-4.44 2.93-7.07-1.07-5.21-2.93-7.07z" />
                        <path d="m172 348c-18.748 0-34 15.252-34 34s15.252 34 34 34 34-15.252 34-34-15.252-34-34-34zm0 48c-7.72 0-14-6.28-14-14s6.28-14 14-14 14 6.28 14 14-6.28 14-14 14z" />
                        <path d="m88.001 348c-18.748 0-34 15.252-34 34s15.252 34 34 34 34-15.252 34-34-15.252-34-34-34zm0 48c-7.72 0-14-6.28-14-14s6.28-14 14-14 14 6.28 14 14-6.28 14-14 14z" />
                        <path d="m256 348c-18.748 0-34 15.252-34 34s15.252 34 34 34 34-15.252 34-34-15.252-34-34-34zm0 48c-7.72 0-14-6.28-14-14s6.28-14 14-14 14 6.28 14 14-6.28 14-14 14z" />
                        <path d="m413.7 63.767c-7.933-7.933-18.48-12.302-29.699-12.302s-21.766 4.369-29.699 12.301c-16.375 16.376-16.375 43.021 0 59.397 7.933 7.933 18.48 12.302 29.699 12.302s21.766-4.369 29.699-12.302c16.375-16.376 16.375-43.021 0-59.396zm-14.143 45.254c-4.155 4.155-9.68 6.444-15.556 6.444s-11.401-2.289-15.556-6.444c-8.578-8.578-8.578-22.535 0-31.113 4.155-4.155 9.68-6.443 15.556-6.443s11.401 2.288 15.556 6.444c8.578 8.578 8.578 22.534 0 31.112z" />
                        <path fill="#ed2024" d="m441.98 35.482c-3.906-3.905-10.237-3.905-14.142 0s-3.906 10.237 0 14.142c24.174 24.174 24.174 63.508 0 87.681-3.905 3.905-3.905 10.237 0 14.143 1.953 1.953 4.512 2.929 7.071 2.929s5.119-0.976 7.071-2.929c31.971-31.972 31.971-83.994 0-115.97z" />
                        <path fill="#ed2024" d="m340.16 49.623c3.905-3.905 3.905-10.237 0-14.142s-10.237-3.905-14.142 0c-31.971 31.973-31.971 83.995 0 115.97 1.953 1.953 4.512 2.929 7.071 2.929s5.119-0.976 7.071-2.929c3.905-3.905 3.905-10.237 0-14.143-24.174-24.173-24.174-63.507 0-87.682z" />
                        <path fill="#ed2024" d="m474.54 2.93c-3.905-3.906-10.237-3.904-14.142 0-3.905 3.905-3.906 10.237 0 14.143 42.122 42.122 42.122 110.66 0 152.78-3.905 3.905-3.905 10.237 0 14.142 1.953 1.953 4.512 2.929 7.071 2.929s5.119-0.977 7.071-2.929c49.92-49.921 49.92-131.15 0-181.07z" />
                        <path fill="#ed2024" d="m307.61 169.86c-42.123-42.123-42.123-110.66 0-152.78 3.905-3.905 3.905-10.237 0-14.143s-10.237-3.905-14.142 0c-49.92 49.921-49.92 131.15 0 181.07 1.953 1.954 4.512 2.93 7.071 2.93s5.119-0.977 7.071-2.929c3.905-3.905 3.906-10.237 0-14.142z" />
                        <path d="m391.07 156.68c-1.86-1.86-4.44-2.93-7.07-2.93s-5.21 1.07-7.07 2.93-2.93 4.44-2.93 7.07 1.07 5.21 2.93 7.07 4.44 2.93 7.07 2.93 5.21-1.07 7.07-2.93 2.93-4.44 2.93-7.07-1.07-5.21-2.93-7.07z" />
                      </svg>
                    </span> Source </h4>
                  <ul>
                  <li> <dfn>Client</dfn> <div id="nearest"></div>   <div id="ip"></div>  </li>
              <li> <dfn>Server(s)</dfn> <div id="nearest"></div></li>
              <li> <dfn>ISP</dfn> <div id="dns"></div> </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="modal fade c-setting-modal" tabIndex={-1} role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-body">
              <button type="button" className="close" data-dismiss="modal">×</button>
              <p>"Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit..."
                "There is no one who loves pain itself, who seeks after it and wants to have it, simply because it is pain..."
                What is Lorem Ipsum?
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum</p>
            </div>
          </div>
        </div>
      </div>
      <span style={{display: 'none'}} id="status" />
        
      </div>
    );
  }
}
export default App;
