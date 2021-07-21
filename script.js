(function () {
  async function getConfig() {
    let projectId = 7;
    const scripts = [...document.querySelectorAll("script")];
    const ourScript = scripts.filter((s) =>
      s.src.match(new RegExp(`?project_id=7`))
    )[0];

    if (ourScript) {
      const shopMatch = ourScript.src.match(/shop=(.*)/);
      if (!shopMatch) return null;
      const shop = shopMatch[1];
      const response = await fetch(
        `https://api.buildwithloco.com/projects/${projectId}/websites/configs?shop=${shop}`
      );
      const data = await response.json();
      return data;
    }
    return {};
  }

  getConfig().then((data) => {
    const theme = data.theme;

    const html = `
  <div id="loco">
    <style>
    #loco {
      position: fixed;
      bottom: -60px;
    position: fixed;
    z-index: 9999;
    right: -50px;
    }
    
  </style>
    
  <svg xmlns="http://www.w3.org/2000/svg" width="500" height="743.3527" viewBox="0 0 479.09883 613.3527" style=""><ellipse cx="290.76286" cy="337.84206" rx="140.55313" ry="216.76417" transform="translate(-152.5033 48.86177) rotate(-21.07967)" fill="${theme}"></ellipse><path d="M374.61922,700.62532a1.87392,1.87392,0,0,0,1.853-1.60989c.07961-.55941,7.87821-56.80385.87419-131.55505-6.46825-69.03453-27.2404-168.46855-89.46567-250.13212a1.8741,1.8741,0,1,0-2.98126,2.27179c61.68782,80.95836,82.29252,179.66277,88.71517,248.20988,6.96329,74.31625-.77414,130.12207-.85314,130.6772a1.87558,1.87558,0,0,0,1.85772,2.13819Z" transform="translate(-50.45058 -78.32365)" fill="#3f3d56"></path><path d="M343.513,425.31016a1.874,1.874,0,0,0,1.10326-3.39c-.22587-.1641-22.98965-16.56624-57.02117-29.02691-31.45959-11.51755-79.2986-21.959-128.548-6.28463a1.87383,1.87383,0,1,0,1.1365,3.57117c48.24041-15.35225,95.21225-5.08346,126.1228,6.23339,33.54578,12.28254,55.88467,28.37782,56.10642,28.53887A1.86663,1.86663,0,0,0,343.513,425.31016Z" transform="translate(-50.45058 -78.32365)" fill="#3f3d56"></path></svg>

  </div>
  `;

    const wrap = document.createElement("div");
    wrap.id = "locoTest";

    document.body.appendChild(wrap);
    window.locoTest.innerHTML = html;
  });
})();
