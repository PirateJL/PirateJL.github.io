import { Utils } from "./utils.js";
const App = {
    myContainer:  document.getElementById('myContainer'),
    jlFavicon: "img/favicon.ico",
    jlLogoImg: "img/JL-Logo.png",
    jLogoImg: "img/J-Logo.png",
    lLogoImg: "img/L-Logo.png",
    READY: false,
    MOBILE: false,
    ERROR: false,
    myTechCanvas: null,
    myThoughts: [
        "One who smiles rather than rages is always the stronger.",
        "Live more worry less.",
        "Do What You Love,\nLove What You Do.",
        "M.A.T.H.\nMental Abuse To Humans.",
        "Y.O.L.O.\nYou Only Live Once.",
        "Work Hard Play Hard.",
        "You got this",
        "I didn't come this far to only come this far."
    ],
    mainMenuNav: [
        {rel: "about", label: "lang.about"},
        {rel: "skills", label: "lang.skills"},
        {rel: "portfolio", label: "lang.portfolio"},
        {rel: "blog", label: "lang.blog"},
        {rel: "contact", label: "lang.contact"}
    ],
    mySocials: [
        {
            rel: "Instagram",
            link: "https://www.instagram.com/jeanlaurentduzant",
            svgWidth: 17,
            svgHeight: 17,
            svgStyles: "color: #dbdbdb;",
            svgViewBox: "0 0 16 16",
            svgPathD: "M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z"
        },
        {
            rel: "Linkedin",
            link: "https://www.linkedin.com/in/jean-laurent-duzant-580287171",
            svgWidth: 17,
            svgHeight: 17,
            svgStyles: "color: #dbdbdb;",
            svgViewBox: "0 0 16 16",
            svgPathD: "M 4.943 12.248 V 6.169 H 2.542 v 7.225 h 2.401 z m -1.2 -7.212 c 0.837 0 1.358 -0.554 1.358 -1.248 c -0.015 -0.709 -0.52 -1.248 -1.342 -1.248 c -0.822 0 -1.359 0.54 -1.359 1.248 c 0 0.694 0.521 1.248 1.327 1.248 h 0.016 z m 4.908 8.212 V 9.359 c 0 -0.216 0.016 -0.432 0.08 -0.586 c 0.173 -0.431 0.568 -0.878 1.232 -0.878 c 0.869 0 1.216 0.662 1.216 1.634 v 3.865 h 2.401 V 9.25 c 0 -2.22 -1.184 -3.252 -2.764 -3.252 c -1.274 0 -1.845 0.7 -2.165 1.193 v 0.025 h -0.016 a 5.54 5.54 0 0 0 0.016 -0.025 V 6.169 h -2.4 c 0.03 0.678 0 7.225 0 7.225 h 2.4 z M -1 5"
        },
        {
            rel: "GitHub",
            link: "https://github.com/JDevs10",
            svgWidth: 17,
            svgHeight: 17,
            svgStyles: "color: #dbdbdb;",
            svgViewBox: "0 0 16 16",
            svgPathD: "M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"
        },
        {
            rel: "CodePen",
            link: "https://codepen.io/jdevs10",
            svgWidth: 17,
            svgHeight: 17,
            svgStyles: "color: #dbdbdb;",
            svgViewBox: "0 0 16 16",
            svgPathD: "M10.478 1.647a.5.5 0 1 0-.956-.294l-4 13a.5.5 0 0 0 .956.294l4-13zM4.854 4.146a.5.5 0 0 1 0 .708L1.707 8l3.147 3.146a.5.5 0 0 1-.708.708l-3.5-3.5a.5.5 0 0 1 0-.708l3.5-3.5a.5.5 0 0 1 .708 0zm6.292 0a.5.5 0 0 0 0 .708L14.293 8l-3.147 3.146a.5.5 0 0 0 .708.708l3.5-3.5a.5.5 0 0 0 0-.708l-3.5-3.5a.5.5 0 0 0-.708 0z"
        }
    ],
    init: async function () {
        this.initIcon();
        this.initMenu();
        this.welcomeCanvas.init();
        this.initMobileMenu();
        this.initH1H2s();
        this.initTechCanvas();
        this.initPortfolioWall();
        this.initWorkExperience();
        this.initContactInfo();
        this.initShowcaseProject();
        this.initResponsive();

        console.log(App.TranslationServiceObj.translate("greeting", {string: 'JDevs10'}));

        document.addEventListener('error', (event) => {
            window.location.href = "./404.html";
        });

        document.body.classList.add('window-loaded');
        App.READY = true;
    },
    initIcon: function () {
        let link = document.querySelector("link[rel~='icon']");
        if (!link) {
            link = document.createElement('link');
            link.rel = 'icon';
            document.getElementsByTagName('head')[0].appendChild(link);
        }
        link.href = App.jlFavicon;
    },
    initMenu: function () {
        const myMenu = document.getElementById("myMenu");

        if (Utils.Function.empty(document.getElementById('menuMobileBtn'))) {
            const menuMobileBtn = document.createElement('a');
            menuMobileBtn.setAttribute('id', 'menuMobileBtn');
            menuMobileBtn.classList.add('mbtn');
            menuMobileBtn.classList.add('spin-me');

            const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg"),
            path = document.createElementNS("http://www.w3.org/2000/svg", "path");
            svg.setAttribute('xmlns', "http://www.w3.org/2000/svg");
            svg.setAttribute('viewBox', '0 0 448 512');
            svg.setAttribute('role', "img");
            svg.setAttribute('focusable', false);
            path.setAttribute('fill', "currentColor");
            path.setAttribute('d', "M436 124H12c-6.627 0-12-5.373-12-12V80c0-6.627 5.373-12 12-12h424c6.627 0 12 5.373 12 12v32c0 6.627-5.373 12-12 12zm0 160H12c-6.627 0-12-5.373-12-12v-32c0-6.627 5.373-12 12-12h424c6.627 0 12 5.373 12 12v32c0 6.627-5.373 12-12 12zm0 160H12c-6.627 0-12-5.373-12-12v-32c0-6.627 5.373-12 12-12h424c6.627 0 12 5.373 12 12v32c0 6.627-5.373 12-12 12z");
            svg.appendChild(path);
            menuMobileBtn.appendChild(svg);

            menuMobileBtn.addEventListener('click', function (e) {
                document.body.classList.add('stop-scrolling');
                menuMobileBtn.classList.add('mbtn-cl');
                const _myMenu = document.getElementById("myMenu");
                _myMenu.style.display = 'flex';
                _myMenu.style.opacity = '1';
                _myMenu.style.overflowY = 'auto';
                _myMenu.style.paddingBottom = '100px';
            });
            document.getElementsByTagName('body')[0].appendChild(menuMobileBtn);
        }

        const headerMenu = document.createElement('div'), 
        topDivHeaderMenu = document.createElement('div'), 
        bottomDivHeaderMenu = document.createElement('div');

        topDivHeaderMenu.classList.add('main-menu-top');
        const htlLogoLink = document.createElement('a');
        htlLogoLink.classList.add('logo');
        htlLogoLink.rel = "home";
        htlLogoLink.addEventListener('click', function() {
            if (App.MOBILE) {
                App.hideMenu();
            }
            App.loader.loadPage(`index.html`, 10);
        });
        htlLogoLink.style.cursor = 'pointer';
        const img = document.createElement('img');
        img.src=App.jlLogoImg;
        htlLogoLink.appendChild(img);
        htlLogoLink.appendChild(document.createElement('br'));
        const span1 = document.createElement('span');
        span1.innerHTML="Jean-Laurent";
        htlLogoLink.appendChild(span1);
        topDivHeaderMenu.appendChild(htlLogoLink);
        topDivHeaderMenu.appendChild(document.createElement('br'));
        const span2 = document.createElement('span');
        span2.innerHTML = App.TranslationServiceObj.translate("fullStackDeveloper");
        topDivHeaderMenu.appendChild(span2);
        headerMenu.appendChild(topDivHeaderMenu);

        bottomDivHeaderMenu.classList.add('main-menu-lang');
        this.TranslationService.initHtml(bottomDivHeaderMenu);
        headerMenu.appendChild(bottomDivHeaderMenu);

        myMenu.appendChild(headerMenu);

        const navContent = document.createElement('nav');
        navContent.classList.add('main-menu_nav');
        this.mainMenuNav.forEach(async (elem) => {
            const isUrlAccessible = await Utils.Function.isUrlAccessible(`${elem.rel}.html`).valueOf();

            if (isUrlAccessible) {
                const btn = document.createElement('a');
                btn.addEventListener('click', function() {
                    if (App.MOBILE) {
                        App.hideMenu();
                    }
                    App.loader.loadPage(`${elem.rel}.html`);
                });
                btn.innerHTML = App.TranslationServiceObj.translate(elem.label);
                btn.rel = elem.rel;
                btn.style.cursor = 'pointer';
                navContent.appendChild(btn);
            }
        });
        myMenu.appendChild(navContent);

        const footerUl = document.createElement('ul');
        footerUl.classList.add('social');
        this.mySocials.forEach(item => {
            const footerLi = document.createElement('li');
            const htlSocialLink = document.createElement('a');
            htlSocialLink.rel = item.rel;
            htlSocialLink.href = item.link;
            htlSocialLink.target = "_blank";
            const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
            svg.setAttribute('xmlns', "http://www.w3.org/2000/svg");
            svg.setAttribute('width', item.svgWidth);
            svg.setAttribute('height', item.svgHeight);
            svg.setAttribute('fill', "currentColor");
            svg.setAttribute('style', item.svgStyles);
            svg.setAttribute('viewBox', item.svgViewBox);
            const path = document.createElementNS("http://www.w3.org/2000/svg", "path");
            path.setAttribute('d', item.svgPathD);
            svg.appendChild(path);
            htlSocialLink.appendChild(svg);
            footerLi.appendChild(htlSocialLink);
            footerUl.appendChild(footerLi);
        });
        myMenu.appendChild(footerUl);
    },
    initMobileMenu: function () {
        const myMenu = document.getElementById('myMenu');

        if (Utils.Function.empty(document.getElementById('clsMenuMobileBtn'))) {
            const clsMenuMobileBtn = document.createElement('a');
            clsMenuMobileBtn.setAttribute('id', 'clsMenuMobileBtn');
            clsMenuMobileBtn.classList.add('mbtn');
            clsMenuMobileBtn.classList.add('spin-me');

            const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg"),
            path = document.createElementNS("http://www.w3.org/2000/svg", "path");
            svg.setAttribute('xmlns', "http://www.w3.org/2000/svg");
            svg.setAttribute('viewBox', '0 0 448 512');
            svg.setAttribute('role', "img");
            svg.setAttribute('focusable', false);
            path.setAttribute('fill', "currentColor");
            path.setAttribute('d', "M193.94 256L296.5 153.44l21.15-21.15c3.12-3.12 3.12-8.19 0-11.31l-22.63-22.63c-3.12-3.12-8.19-3.12-11.31 0L160 222.06 36.29 98.34c-3.12-3.12-8.19-3.12-11.31 0L2.34 120.97c-3.12 3.12-3.12 8.19 0 11.31L126.06 256 2.34 379.71c-3.12 3.12-3.12 8.19 0 11.31l22.63 22.63c3.12 3.12 8.19 3.12 11.31 0L160 289.94 262.56 392.5l21.15 21.15c3.12 3.12 8.19 3.12 11.31 0l22.63-22.63c3.12-3.12 3.12-8.19 0-11.31L193.94 256z");
            svg.appendChild(path);
            clsMenuMobileBtn.appendChild(svg);

            clsMenuMobileBtn.addEventListener('click', function (e) {
                document.getElementById('menuMobileBtn').classList.remove('mbtn-cl');
                document.getElementById('myMenu').removeAttribute('style');
            });
            myMenu.appendChild(clsMenuMobileBtn);
        }
    },
    hideMenu: function () {
        const myMenu = document.getElementById('myMenu');
        myMenu.style.display = 'none';
        myMenu.style.opacity = '0';
    },
    welcomeCanvas: {
        canvas: null,
        ctx: null,
        width: 0,
        height: 0,
        mouse: {
            x: null,
            y: null
        },
        dots: [],
        animationId: null,
        isRunning: false,
        init: async function () {
            App.welcomeCanvas.canvas = document.getElementById('welcomeCanvas')
            if (Utils.Function.empty(App.welcomeCanvas.canvas)) {
                return;
            }

            const welcomeCanvasStopMotion = document.getElementById('welcomeCanvasStopMotion');
            welcomeCanvasStopMotion.innerHTML = await App.IconManager.getPlayCircleOutline();
            welcomeCanvasStopMotion.addEventListener('click', App.welcomeCanvas.playPauseEvent);

            App.welcomeCanvas.ctx = App.welcomeCanvas.canvas.getContext('2d')
            App.welcomeCanvas.resetSize()
            App.welcomeCanvas.resetDots()
            document.addEventListener('mousemove', App.welcomeCanvas.mousemove)
            document.addEventListener('mouseout', App.welcomeCanvas.mouseout)
            document.addEventListener('scroll', () => {
                if (Utils.Function.empty(App.MOBILE) && !Utils.Function.empty(App.welcomeCanvas.canvas)) {
                    const canvasRec = App.welcomeCanvas.canvas.getBoundingClientRect()
                    if ((canvasRec.x + canvasRec.width) < 0 || (canvasRec.y + canvasRec.height) < 0|| (canvasRec.x > window.innerWidth || canvasRec.y > window.innerHeight)) {
                        cancelAnimationFrame(App.welcomeCanvas.animationId)
                        App.welcomeCanvas.animationId = null
                    } else if (Utils.Function.empty(App.welcomeCanvas.animationId)) {
                        App.welcomeCanvas.animationLoop()
                    }
                }
            });
            window.addEventListener('resize', async function(e) {
                App.welcomeCanvas.resetSize()
                if (App.MOBILE) {
                    cancelAnimationFrame(App.welcomeCanvas.animationId)
                    App.welcomeCanvas.animationId = null
                } else {
                    App.welcomeCanvas.resetDots()
                    if (Utils.Function.empty(App.welcomeCanvas.animationId)) {
                        App.welcomeCanvas.isRunning = true;
                        App.welcomeCanvas.animationLoop()
                        welcomeCanvasStopMotion.innerHTML = await App.IconManager.getPlayCircleOutline();
                    }
                }
            });

            App.welcomeCanvas.isRunning = true;
            App.welcomeCanvas.animationLoop()
        },
        playPauseEvent: async function () {
            if (!Utils.Function.empty(App.welcomeCanvas.isRunning)) {
                App.welcomeCanvas.isRunning = false;
                welcomeCanvasStopMotion.innerHTML = await App.IconManager.getPauseCircleOutline();
            } else {
                App.welcomeCanvas.isRunning = true;
                App.welcomeCanvas.animationLoop()
                welcomeCanvasStopMotion.innerHTML = await App.IconManager.getPlayCircleOutline();
            }
        },
        mousemove: function (e) {
            const myMenu = document.getElementById('myMenu');

            console.log(myMenu.clientWidth, e.x, e.y);

            if (!Utils.Function.empty(App.MOBILE)) {
                App.welcomeCanvas.mouse.x = e.x - myMenu.clientWidth
                App.welcomeCanvas.mouse.y = e.y
            } else {
                if (!Utils.Function.empty(myMenu)) {
                    if (e.x <= myMenu.clientWidth) {
                        App.welcomeCanvas.mouse.x = 0
                    } else {
                        App.welcomeCanvas.mouse.x = e.x - myMenu.clientWidth
                    }
                } else {
                    App.welcomeCanvas.mouse.x = e.x
                }
            }
        },
        mouseout: function (e) {
            App.welcomeCanvas.mouse.x = null
            App.welcomeCanvas.mouse.y = null
        },
        resetSize: function () {
            App.welcomeCanvas.width  = App.welcomeCanvas.canvas.width  = window.innerWidth
            App.welcomeCanvas.height = App.welcomeCanvas.canvas.height = window.innerHeight
        },
        resetDots: function () {
            App.welcomeCanvas.dots = [];
            for (let i = 0; i < 2000; i++) {
                App.welcomeCanvas.dots.push(new App.welcomeCanvas.Dots())
            }
        },
        animationLoop: function () {
            if (!Utils.Function.empty(App.MOBILE) || !App.welcomeCanvas.isRunning) {return}

            App.welcomeCanvas.ctx.clearRect(0, 0, App.welcomeCanvas.width, App.welcomeCanvas.height)
            App.welcomeCanvas.ctx.globalCompositeOperation = 'lighter'
            App.welcomeCanvas.draw()
            App.welcomeCanvas.animationId = requestAnimationFrame(App.welcomeCanvas.animationLoop)
        },
        draw: function () {
            App.welcomeCanvas.dots.forEach(dot => {
                dot.update()
                dot.draw()
            })
        },
        Dots: class {
            constructor() {
                this.constructed = true
                this.reset()
            }
            reset() {
                this.x = Utils.Math.getRandomBetween(0, App.welcomeCanvas.width)
                this.y = Utils.Math.getRandomBetween(App.welcomeCanvas.height - 10, App.welcomeCanvas.height - 10)

                this.baseX = this.x
                this.baseY = this.y

                if (App.welcomeCanvas.mouse.x) {
                    this.centerX = App.welcomeCanvas.mouse.x
                } else {
                    this.centerX = Utils.Math.getRandomBetween(0, App.welcomeCanvas.width)
                }

                this.size = Utils.Math.getRandomBetween(2, 4)

                if (this.constructed) {
                    this.rgba = [0, 170, 255, 1]
                } else {
                    this.rgba = [0, 0, 0, 0]
                }

                this.time = 0
                this.ttl = Utils.Math.getRandomBetween(100, 300)
            }

            draw() {
                App.welcomeCanvas.ctx.beginPath()
                App.welcomeCanvas.ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2)
                App.welcomeCanvas.ctx.fillStyle = `rgba(${this.rgba[0]}, ${this.rgba[1]}, ${this.rgba[2]}, ${this.rgba[3]})`
                App.welcomeCanvas.ctx.fill()
                App.welcomeCanvas.ctx.closePath()
            }

            update() {
                if (this.time <= this.ttl) {
                    let progess = 1 - (this.ttl - this.time) / this.ttl
                    this.x = this.baseX + ((this.centerX - this.baseX) * Utils.Math.easeOutElastic(progess))
                    this.y = this.baseY - (this.baseY * Utils.Math.easeOutQuad(progess))
                    this.time++
                } else {
                    this.reset()
                }
            }
        }
    },
    initTechCanvas: function () {
        const myTechCanvas = document.getElementById("myTechCanvas");
        if (Utils.Function.empty(myTechCanvas)) {
            return;
        }
        // Add/change/move/remove tech from here
        const techList = [
            // Destop
            {name:"C#", value:78, url: "https://en.wikipedia.org/wiki/C_Sharp_(programming_language)"},
            {name:"Visual Studio", value:85, url: "https://visualstudio.microsoft.com"},
            // Mobile
            {name:"Android Studio", value:85, url: "https://developer.android.com/studio"},
            {name:"Java", value:78, url: "https://fr.wikipedia.org/wiki/Java_(langage)"},
            {name:"Kotlin", value:73, url: "https://kotlinlang.org"},
            {name:"React Native", value:90, url: "https://reactnative.dev"},
            {name:"Xcode", value:70, url: "https://developer.apple.com/xcode"},
            {name:"Swift", value:70, url: "https://www.apple.com/swift"},
            // Web
            {name:"HTML", value:80, url: "https://en.wikipedia.org/wiki/HTML"},
            {name:"CSS", value:80, url: "https://en.wikipedia.org/wiki/Cascading_Style_Sheets"},
            {name:"JavaScript", value:80, url: "https://en.wikipedia.org/wiki/JavaScript"},
            {name:"TypeScript", value:85, url: "https://en.wikipedia.org/wiki/TypeScript"},
            {name:"Angular", value:83, url: "https://angular.io"},
            {name:"Bootstrap", value:70, url: "https://en.wikipedia.org/wiki/Bootstrap_(front-end_framework)"},
            {name:"Material Design", value:70, url: "https://m3.material.io"},
            {name:"NPM", value:70, url: "https://www.npmjs.com"},
            {name:"Node JS", value:85, url: "https://en.wikipedia.org/wiki/Node.js"},
            {name:"PHP", value:80, url: "https://en.wikipedia.org/wiki/PHP"},
            {name:"MYSQL", value:90, url: "https://www.mysql.com"},
            {name:"PostgreSQL", value:90, url: "https://www.postgresql.org"},
            {name:"REST", value:90, url: "https://en.wikipedia.org/wiki/Representational_state_transfer"},
            {name:"JSON", value:100, url: "https://en.wikipedia.org/wiki/JSON"},
            {name:"Git", value:78, url: "https://en.wikipedia.org/wiki/Git"}
        ];
        const techListElement = document.createElement('ul');
        techListElement.setAttribute('id', 'tags');
        techList.forEach(element => {
            const techListElementItem = document.createElement('li');
            const itemA = document.createElement('a');
            itemA.setAttribute('href', element.url);
            itemA.setAttribute('target', '_blank');
            itemA.innerHTML = element.name;
            techListElementItem.appendChild(itemA);
            techListElement.appendChild(techListElementItem);
        });
        myTechCanvas.appendChild(techListElement);
        App.myTechCanvas = myTechCanvas;
    },
    initH1H2s: function () {
        const importantHs = ['h1', 'h2'];
        const h1h2h3Found = document.querySelectorAll("h1, h2, h3");
        h1h2h3Found.forEach(elem => {
            const title = elem.ariaLabel ?? elem.attributes.getNamedItem('aria-label').value;
            
            const imgJ = document.createElement('img');
            imgJ.classList.add('blast');
            imgJ.classList.add('spin-me');
            imgJ.classList.add('animation-logo');
            imgJ.setAttribute('width', 50);
            imgJ.setAttribute('height', 70);
            imgJ.src = App.jLogoImg;
            imgJ.alt = "The J of Jean";
            
            const imgL = document.createElement('img');
            imgL.classList.add('blast');
            imgL.classList.add('spin-me');
            imgL.classList.add('animation-logo');
            imgL.setAttribute('width', 50);
            imgL.setAttribute('height', 70);
            imgL.src = App.lLogoImg;
            imgL.alt = "The L of Laurent";

            for (let index = 0; index < title.length; index++) {
                const char = title.charAt(index);
                const span = document.createElement('span');
                span.style.opacity = 1;
                if (char !== ' ') {
                    if (importantHs.includes(elem.nodeName.toLocaleLowerCase())) {
                        if (char === 'J') {
                            elem.appendChild(imgJ);
                            continue;
                        } else if (char === 'L') {
                            elem.appendChild(imgL);
                            continue;
                        }
                    }
                    span.classList.add('blast');
                    span.classList.add('spin-me');
                    span.setAttribute('aria-hidden', true);
                    span.innerHTML = char;
                } else if (importantHs.includes(elem.nodeName.toLocaleLowerCase())) {
                    span.classList.add('space-right');
                } else {
                    span.innerHTML = char;
                }
            
                elem.appendChild(span);
                if (char === ',' || char === '&') {
                    elem.appendChild(document.createElement('br'));
                }
            }
        });

    },
    initPortfolioWall: function () {
        const portfolioWall = document.getElementById("portfolio-wall");
        if (Utils.Function.empty(portfolioWall)) {
            return;
        }

        Utils.Function.ajax('data/portfolio.json', function ({response, httpCode}) {
            if (httpCode == 200) {
                const jsonData = JSON.parse(response);
                const list = document.createElement('ul');

                for (let index = 0; index < jsonData.length; index++) {
                    const item = jsonData[index];

                    const bgDiv = document.createElement('div'), li = document.createElement('li');
                    bgDiv.setAttribute('id', `parentItem-${index}`);
                    bgDiv.classList.add('magic-wall_item');
                    bgDiv.style = `background-image: url('${item.thumbnail}');`;

                    const hoverDiv = document.createElement('div');
                    hoverDiv.classList.add('hover-content');
                    bgDiv.appendChild(hoverDiv);

                    const itemLink = document.createElement('a');
                    itemLink.href = `#item-${index}`;
                    itemLink.title = item.title;
                    itemLink.classList.add('colorbox');
                    itemLink.addEventListener('click', async () => App.initPortfolioItem(index, item));

                    bgDiv.appendChild(itemLink);

                    li.appendChild(bgDiv);
                    list.appendChild(li);
                }
                portfolioWall.appendChild(list);
            }
        });
    },
    initPortfolioItem: async function (index, item) {
        if (Utils.Function.empty(item)) return;

        // Create overlay and popup divs
        const divPopUp1 = document.createElement('div');
        const divPopUp = document.createElement('div');
        divPopUp1.appendChild(divPopUp);
        document.body.appendChild(divPopUp1);
        document.body.classList.add('stop-scrolling');
        divPopUp1.setAttribute('id', `item-${index}`);
        divPopUp1.classList.add('overlay');
        divPopUp.classList.add('popup');

        // Create carousel elements
        const currentPopupWidth = window.innerWidth > 700 ? 700 : window.innerWidth;
        const carouselWrapElm = document.createElement('div');
        const carouselWindowElm = document.createElement('div');
        carouselWrapElm.style.width = `${currentPopupWidth}px`;
        carouselWrapElm.classList.add('carouselWrap');
        carouselWindowElm.classList.add('carouselWindow');

        if (!Utils.Function.empty(item.carouselImgs)) {
            const carouselElm = document.createElement('div');
            const prev = document.createElement('i');
            const next = document.createElement('i');
            carouselElm.setAttribute('id', 'carousel');
            carouselElm.style.left = `-${currentPopupWidth}px`;

            item.carouselImgs.forEach((value) => {
                const imgDiv = document.createElement('div');
                imgDiv.classList.add('carouselSlide');
                imgDiv.style.height = '400px';
                imgDiv.style.width = `${currentPopupWidth}px`;
                imgDiv.style.backgroundImage = `url("${value}")`;
                imgDiv.style.backgroundSize = 'contain';
                imgDiv.style.backgroundRepeat = 'no-repeat';
                imgDiv.style.backgroundPosition = 'center';
                imgDiv.addEventListener('click', function (e) {
                    window.open(value, 'child');
                })
                carouselElm.appendChild(imgDiv);
            });

            carouselWindowElm.appendChild(carouselElm);

            prev.classList.add('carouselPrev');
            prev.innerHTML = await App.IconManager.getCarouselPrev();
            prev.addEventListener('click', function(e) {
                carouselElm.style.transform = `translateX(${currentPopupWidth}px)`;
                carouselElm.classList.add('carouselTransition');
                setTimeout(function() {
                    const firstSlide = carouselElm.querySelector('.carouselSlide:first-child');
                    const lastSlide = carouselElm.querySelector('.carouselSlide:last-child');
                    carouselElm.insertBefore(lastSlide, firstSlide);
                    carouselElm.classList.remove('carouselTransition');
                    carouselElm.style.transform = 'translateX(0)';
                }, 700);
            });

            carouselWindowElm.appendChild(prev);

            next.classList.add('carouselNext');
            next.innerHTML = await App.IconManager.getCarouselNext();
            next.addEventListener('click', function(e) {
                carouselElm.style.transform = `translateX(-${currentPopupWidth}px)`;
                carouselElm.classList.add('carouselTransition');
                setTimeout(function() {
                    const firstSlide = carouselElm.querySelector('.carouselSlide:first-child');
                    carouselElm.appendChild(firstSlide);
                    carouselElm.classList.remove('carouselTransition');
                    carouselElm.style.transform = 'translateX(0)';
                }, 700);
            });

            carouselWindowElm.appendChild(next);
        }

        carouselWrapElm.appendChild(carouselWindowElm);
        divPopUp.appendChild(carouselWrapElm);

        // Create popup info elements
        const modalInfo = document.createElement('div');
        modalInfo.classList.add('modalInfo');
        modalInfo.style.width = `${currentPopupWidth}px`;

        const titleElem = document.createElement('div');
        titleElem.classList.add('title');
        titleElem.innerHTML = item.title;
        modalInfo.appendChild(titleElem);

        const tagElem = document.createElement('div');
        tagElem.classList.add('label');
        tagElem.innerHTML = App.TranslationServiceObj.translate(item.label) ?? '';
        modalInfo.appendChild(tagElem);

        const tagsDivElem = document.createElement('div');
        tagsDivElem.classList.add('row');
        tagsDivElem.style.width = '100%';
        tagsDivElem.style.borderBottom = '1px solid rgba(0, 0, 0, 0.1)';
        tagsDivElem.style.paddingBottom = '15px';

        if (!Utils.Function.empty(item.tags) && Array.isArray(item.tags)) {
            item.tags.forEach(tag => {
                const tagElem = document.createElement('div');
                tagElem.classList.add('projectTag');
                tagElem.innerHTML = App.TranslationServiceObj.translate(tag);
                tagsDivElem.appendChild(tagElem);
            });
        }
        modalInfo.appendChild(tagsDivElem);

        const detailElem = document.createElement('div');
        detailElem.classList.add('detail');
        detailElem.innerHTML = App.TranslationServiceObj.translate(item.description);
        modalInfo.appendChild(detailElem);

        divPopUp.appendChild(modalInfo);

        if (!Utils.Function.empty(item.appLink) || !Utils.Function.empty(item.apkDemoLink)) {
            const resourceLinkElem = document.createElement('a');
            resourceLinkElem.style.textDecoration = 'none';
            resourceLinkElem.style.cursor = 'pointer';
            if (!Utils.Function.empty(item.isMobile) && !Utils.Function.empty(item.apkDemoLink)) {
                resourceLinkElem.addEventListener('click', function() {
                    App.closePortfolioItem(divPopUp1, index);
                    App.loader.loadPage(`/showcase-project.html#${item.title}`, 10);
                });
            } else {
                resourceLinkElem.href = item.appLink;
                resourceLinkElem.target = '_blank';
            }
    
            const divBtn = document.createElement('div');
            divBtn.classList.add('popup-view-resource');
    
            const viewBtnText = !Utils.Function.empty(item.isWeb) ? ' VIEW SITE' : !Utils.Function.empty(item.isMobile) ? ' VIEW APP' : 'undefined';
            divBtn.innerHTML = await App.IconManager.getOpenInNewTab() + viewBtnText;
            resourceLinkElem.appendChild(divBtn);
            divPopUp.appendChild(resourceLinkElem);
        }

        // Create close button
        const closeBtnElem = document.createElement('i');
        closeBtnElem.classList.add('close');
        closeBtnElem.innerHTML = await App.IconManager.getCloseIcon();
        closeBtnElem.addEventListener('click', function (e) {
            App.closePortfolioItem(divPopUp1, index);
        });

        divPopUp.appendChild(closeBtnElem);
    },
    /**
     * Remove a 'div' element that has an id of 'item-*'
     * @param {HTMLElement} element 
     * @param {number} index 
     */
    closePortfolioItem: function (element = null, index = null) {
        if (Utils.Function.empty(element)) {
            element = document.querySelectorAll('[id^="item-"]')[0];
            if (Utils.Function.empty(element)) {return;}
        }
        document.body.removeChild(element);
        document.body.classList.remove('stop-scrolling');

        let newHash = "#portfolio-wall";
        if (window.innerWidth <= 768 && !Utils.Function.empty(index)) {
            newHash = `#parentItem-${index}`;
        }
        document.location.href = newHash;

        history.replaceState({}, document.title, window.location.pathname + window.location.search);
    },
    initWorkExperience: function () {
        const workWall = document.getElementById("work-wall");
        if (Utils.Function.empty(workWall)) {
            return;
        }
        workWall.classList.add('row');

        Utils.Function.ajax('data/work.json', function ({response, httpCode}) {
            if (httpCode == 200) {
                const jsonData = JSON.parse(response);
                jsonData.forEach(item => {
                    const box = document.createElement('div');
                    box.classList.add('work-box');

                    const header = document.createElement('header');
                    header.innerText = App.TranslationServiceObj.translate(item.header);
                    box.appendChild(header);

                    const section = document.createElement('section');
                    section.innerText = item.section;
                    const date = document.createElement('time');
                    date.innerText = App.TranslationServiceObj.translate(item.date);
                    section.appendChild(date);
                    box.appendChild(section);

                    const footer = document.createElement('footer');
                    footer.innerText = App.TranslationServiceObj.translate(item.footer);
                    box.appendChild(footer);
                    workWall.appendChild(box);
                });
            }
        });
    },
    initShowcaseProject: async function (projectTitle = decodeURIComponent(window.location.href).split('#')[1] ?? '') {
        const showcaseProject = document.getElementById("showcase-project");
        if (Utils.Function.empty(showcaseProject)) {
            return;
        }

        const myProject = await new Promise(async (resolve) => {
            Utils.Function.ajax('data/portfolio.json', function ({response, httpCode}) {
                if (httpCode == 200) {
                    resolve(JSON.parse(response).filter(item => item.title === projectTitle)[0] ?? undefined);
                }
                resolve(undefined);
            });
        });

        if (Utils.Function.empty(myProject)) {
            confirm('hello error');
            App.loader.loadPage("/404.html", 10);
        }

        const title = document.getElementById('showcase-project-title'),
        projectTags = document.getElementById('projectTags'),
        description = document.getElementById('showcase-projet-description'),
        showcase = document.getElementById('myProjectToShowcase');

        // create title
        for (let index = 0; index < myProject.title.length; index++) {
            const char = myProject.title.charAt(index);
            const span = document.createElement('span');
            span.style.opacity = 1;

            if (char !== ' ') {
                span.classList.add('blast');
                span.classList.add('spin-me');
                span.classList.add('space-right');
                span.setAttribute('aria-hidden', true);
                span.innerHTML = char;
            } else {
                span.innerHTML = char;
            }
            title.appendChild(span);
            if (char === ',' || char === '&') {
                title.appendChild(document.createElement('br'));
            }
        }

        if (!Utils.Function.empty(myProject.tags) && Array.isArray(myProject.tags)) {
            projectTags.classList.add('row');
            projectTags.style.width = '100%';
            myProject.tags.forEach(tag => {
                const tagElem = document.createElement('div');
                tagElem.classList.add('projectTag');
                tagElem.innerHTML = App.TranslationServiceObj.translate(tag);
                projectTags.appendChild(tagElem);
            });
        }

        description.innerHTML = App.TranslationServiceObj.translate(myProject.description);

        if (!Utils.Function.empty(myProject.apkDemoLink)) {
            const iframe = document.createElement('iframe');
            iframe.src = myProject.apkDemoLink;
            iframe.sandbox = 'allow-same-origin allow-scripts';
            iframe.setAttribute('frameborder', 0);
            iframe.allowfullscreen = true;
            iframe.style.height = '100%';
            iframe.style.margin = 'auto';
            showcase.appendChild(iframe);
        }
    },
    initContactInfo: function () {
        const workWall = document.getElementById("section-contact");
        if (Utils.Function.empty(workWall)) {
            return;
        }

        const elements = document.querySelectorAll('.cFormInput');
        elements.forEach((element, key) => {
            element.addEventListener('input', function (event) {
                if (element.textContent.length > 0) {
                    element.classList.add('contentNone');
                } else {
                    element.classList.remove('contentNone');
                }
            });
        });

    },
    /**
     * @description The loader div/obj
     */
    loader: {
        isLoading: false,
        preloader: function() {
            const preloader = document.getElementById('preloader');
            if (Utils.Function.empty(preloader)) {
                const loaderDiv = document.createElement('div');
                loaderDiv.classList.add('preloader');
                document.body.appendChild(loaderDiv);
                return loaderDiv;
            }
            return preloader;
        },
        barValue: null,
        progressBar: null,
        progressBar_bg: null,
        /**
         * @description Init loading div. It will display
         */
        init: function() {
            const inner = document.createElement('div'),
            myThoughts = document.createElement('span'),
            logo = document.createElement('img');

            logo.setAttribute('width', 100);
            logo.src = App.jlLogoImg;
            const text = Utils.Math.choose(App.myThoughts),
            measureText = Utils.Function.measureText(text);
            myThoughts.style.margin = '20px auto';
            myThoughts.style.width = `${(measureText.width / 2)}px`;
            myThoughts.innerText = text;
            
            App.loader.barValue = document.createElement('span');
            App.loader.progressBar = document.createElement('div');
            App.loader.progressBar_bg = document.createElement('div');

            App.loader.preloader().classList.add('preloader');
            inner.classList.add('inner');
            App.loader.progressBar.classList.add('progressBar');
            App.loader.progressBar_bg.classList.add('progressBar-bg');
            
            App.loader.progressBar_bg.appendChild(App.loader.progressBar);
            App.loader.progressBar_bg.appendChild(App.loader.barValue);
            inner.appendChild(logo);
            inner.appendChild(myThoughts);
            inner.appendChild(App.loader.progressBar_bg);
            App.loader.preloader().appendChild(inner);
        },
        /**
         * @description Increasse the speed of proress bar
         * @param {Number}      SPEED       Higher the value the slower progess bar, Smaller the value the faster the progress bar finish. Default at 40
         * @param {Function}    callback    Call function when progress bar is at 100%
         */
        increase: function (SPEED = 40, callback) {
            const limit = 100;
            for(let i = 0; i <= limit; i++) {
                setTimeout(function () {
                    if (i == 100) {
                        callback();
                    } else if (i >= 94) {
                        App.loader.progressBar_bg.style = "position: absolute;flex-wrap: wrap;";
                        App.loader.barValue.style = "margin: auto;";
                    }
                    App.loader.barValue.innerHTML = `${i}%`;
                    App.loader.progressBar.style.width = `${i}%`;
                }, SPEED * i);
            }
        },
        /**
         * @description Show loading div before changing page
         * @param {String} url 
         * @param {Number} speed 
         * @returns 
         */
        loadPage: function (url, speed = 20) {
            if (!App.READY || this.isLoading || Utils.Function.empty(App.myContainer) || !Utils.Function.isString(url)) {return false;}

            this.isLoading = true;
            this.init();
            this.increase(speed, function () {
                
                Utils.Function.ajax(url, function (response, httpCode) {    
                    if (Utils.Function.empty(response)) {
                        App.loader.loadPageError(httpCode);
                    } else {
                        document.textContent = response;
                        document.location = url;
                    }
                    App.loader.isLoading = false;
                });
            });
        },
        /**
         * @description Load error page based of Http code
         * @param {Number} code 
         */
        loadPageError: function (code) {
            switch (code) {
                case 404:
                    document.location = `${code}.html`;
                    break;
            
                default:
                    document.location = '404.html';
                    break;
            }
        }
    },
    initResponsive: function () {
        window.addEventListener('resize', function(e) {
            
            if (e.currentTarget.innerWidth < 1200) {
                App.MOBILE = true;
            } else {App.MOBILE = false;}

            if (e.currentTarget.innerWidth < 700) {
                App.closePortfolioItem();
            }
        });
    },
    IconManager: class {
        static getLiveIcon() {
            return "<svg version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" width=\"75px\" height=\"75px\" viewBox=\"0,0,256,256\"><g fill=\"#ff0000\" fill-rule=\"nonzero\" stroke=\"none\" stroke-width=\"1\" stroke-linecap=\"butt\" stroke-linejoin=\"miter\" stroke-miterlimit=\"10\" stroke-dasharray=\"\" stroke-dashoffset=\"0\" font-family=\"none\" font-weight=\"none\" font-size=\"none\" text-anchor=\"none\" style=\"mix-blend-mode: normal\"><g transform=\"scale(0.5,0.5)\"><path d=\"M101.42969,171.56055c-34.15289,-0.00022 -64.94298,20.57284 -78.01283,52.12596c-13.06985,31.55312 -5.84556,67.8724 18.30419,92.02214c24.14974,24.14974 60.46902,31.37403 92.02214,18.30419c31.55312,-13.06985 52.12618,-43.85994 52.12596,-78.01283c-0.04991,-46.61393 -37.82552,-84.38954 -84.43945,-84.43945zM148.07031,171.56055c30.72511,16.9905 49.79632,49.32948 49.79632,84.43945c0,35.10997 -19.07121,67.44895 -49.79632,84.43945h316.92969c16.56854,0 30,-13.43146 30,-30v-108.8789c0,-16.56854 -13.43146,-30 -30,-30zM323.74414,200c2.56565,-0.04965 4.87896,1.53756 5.75586,3.94922l32.5,89.16992l32.44922,-89.11914c1.13208,-3.11523 4.5752,-4.7229 7.69043,-3.59082c3.11523,1.13208 4.7229,4.5752 3.59082,7.69043l-0.04102,-0.04883l-35.82031,98.41016c-1.20843,3.33032 -4.37225,5.54797 -7.91504,5.54797c-3.54279,0 -6.70661,-2.21765 -7.91504,-5.54797l-35.81836,-98.41016c-0.66202,-1.82046 -0.40458,-3.84854 0.6913,-5.44585c1.09588,-1.59731 2.8954,-2.56741 4.83214,-2.60493zM429.55078,200h43.92969c3.31371,0 6,2.68629 6,6c0,3.31371 -2.68629,6 -6,6h-41.17969v38h41.17969c3.31371,0 6,2.68629 6,6c0,3.31371 -2.68629,6 -6,6h-41.17969v38h41.17969c3.31371,0 6,2.68629 6,6c0,3.31371 -2.68629,6 -6,6h-43.92969c-5.11016,-0.00552 -9.24988,-4.14961 -9.25,-9.25977v-93.48046c0.00012,-5.11016 4.13984,-9.25425 9.25,-9.25977zM215.56445,200.00195c3.24487,0.09405 5.82648,2.75181 5.82617,5.99805v92.44922c-0.00287,0.41014 0.15798,0.80448 0.4469,1.09559c0.28892,0.29111 0.68202,0.45495 1.09217,0.45519h30.46093c3.31371,0 6,2.68629 6,6c0,3.31371 -2.68629,6 -6,6h-30.46093c-7.47721,-0.01154 -13.53399,-6.07356 -13.53907,-13.55078v-92.44922c-0.00015,-1.62154 0.65602,-3.1741 1.81907,-4.30403c1.16304,-1.12993 2.7339,-1.741 4.35476,-1.69402zM293.56445,200.00195c3.24487,0.09405 5.82648,2.75181 5.82617,5.99805v100c0,3.31371 -2.68629,6 -6,6c-3.31371,0 -6,-2.68629 -6,-6v-100c-0.00015,-1.62154 0.65602,-3.1741 1.81907,-4.30403c1.16304,-1.12993 2.7339,-1.741 4.35476,-1.69402zM78.57227,213.60547c2.637,0.07494 5.21384,0.80524 7.49805,2.125l45.92969,26.5c4.91921,2.84033 7.94953,8.0892 7.94953,13.76953c0,5.68033 -3.03032,10.9292 -7.94953,13.76953l-45.91016,26.5c-4.91917,2.85173 -10.9872,2.85765 -15.91193,0.01553c-4.92473,-2.84212 -7.95549,-8.09906 -7.94744,-13.78506v-53c-0.00296,-4.29454 1.7325,-8.4074 4.81103,-11.40168c3.07853,-2.99427 7.23797,-4.61496 11.53077,-4.49285z\"></path></g></g></svg>";
        }
        static getPlayCircleOutline() {
            return new Promise((resolve) => {
                Utils.Function.ajax("img/icons/play-circle-outline.svg", function ({response, httpCode}) {
                    if (httpCode == 200) {
                        resolve(response);
                    }
                });
            });
        }
        static getPauseCircleOutline() {
            return new Promise((resolve) => {
                Utils.Function.ajax("img/icons/pause-circle-outline.svg", function ({response, httpCode}) {
                    if (httpCode == 200) {
                        resolve(response);
                    }
                });
            });
        }
        static getCarouselPrev() {
            return new Promise((resolve) => {
                Utils.Function.ajax("img/icons/carouselPrev.svg", function ({response, httpCode}) {
                    if (httpCode == 200) {
                        resolve(response);
                    }
                });
            });
        }
        static getCarouselNext() {
            return new Promise((resolve) => {
                Utils.Function.ajax("img/icons/carouselNext.svg", function ({response, httpCode}) {
                    if (httpCode == 200) {
                        resolve(response);
                    }
                });
            });
        }
        static getCloseIcon() {
            return new Promise((resolve) => {
                Utils.Function.ajax("img/icons/x.svg", function ({response, httpCode}) {
                    if (httpCode == 200) {
                        resolve(response);
                    }
                });
            });
        }
        static getOpenInNewTab() {
            return new Promise((resolve) => {
                Utils.Function.ajax("img/icons/open-in-new-tab.svg", function ({response, httpCode}) {
                    if (httpCode == 200) {
                        resolve(response);
                    }
                });
            });
        }
    },
    TranslationServiceObj: null,
    TranslationService: class {
        static mainLangContainer = 'main-menu-lang-container'; 
        static localStorageLanguageTranslationKey = 'languageFor_PirateJL.github.io';
        static availableLanguage = [
            {
                type: 'en',
                label: 'English language',
                icon: 'img/icons/lang/flag-gb.svg'
            },
            {
                type: 'fr',
                label: 'Frenh language',
                icon: 'img/icons/lang/flag-fr.svg'
            }
        ];

        constructor() {
            this.translations = {};
            this.currentLanguage = 'en'; // Default language
            const savedLanguage = Utils.Sessiontorage.get(App.TranslationService.localStorageLanguageTranslationKey);
            if (!Utils.Function.empty(savedLanguage)) {
                this.currentLanguage = JSON.parse(savedLanguage).type;
            } else {
                const obj = {
                    index: 0, 
                    type: App.TranslationService.availableLanguage[0].type
                };
                Utils.Sessiontorage.save(App.TranslationService.localStorageLanguageTranslationKey, JSON.stringify(obj));
            }
        }

        /**
         * @param {HTMLElement} containerElem 
         */
        static initHtml(containerElem) {
            if (!Utils.Function.empty(containerElem)) {
                const ul = document.createElement('ul');
                ul.setAttribute('id', App.TranslationService.mainLangContainer);
                ul.classList.add('lang');
                ul.addEventListener('wheel', (event) => {
                    ul.scrollLeft += event.deltaY;
                    event.preventDefault(); // Prevent vertical scrolling
                });

                this.availableLanguage.forEach((item, index) => {
                    const li = document.createElement('li');
                    const img = document.createElement('img');
                    img.setAttribute('index', index);
                    img.addEventListener('click', function() {
                        img.style.borderWidth = 'thick';
                        img.style.borderColor = '#00AAFF';
                        img.style.borderWidth = '2px';
                        App.TranslationService.scrollToLanguage(img.clientWidth, img.offsetLeft);
                        setTimeout(() => {
                            const obj = {index: index, type: item.type};
                            App.TranslationService.saveLanguage(JSON.stringify(obj));
                        }, 300);
                    });

                    img.classList.add('lang-item');
                    img.title = item.label;
                    img.alt = item.label;
                    img.src = item.icon;
                    img.srcset = item.icon;
                    img.style.borderWidth = 'thick';
                    img.style.borderColor = 'transparent';

                    ul.appendChild(li.appendChild(img));
                });
                containerElem.appendChild(ul);

                setTimeout(() => {
                    const savedLanguage = Utils.Sessiontorage.get(App.TranslationService.localStorageLanguageTranslationKey);
                    if (!Utils.Function.empty(savedLanguage)) {
                        const {index} = JSON.parse(savedLanguage);
                        console.log(index, savedLanguage);
                        const img = document.querySelector(`#main-menu-lang-container img:nth-child(${index+1})`);
                        img.style.borderWidth = '2px';
                        img.style.borderColor = '#00AAFF';
                        App.TranslationService.scrollToLanguage(img.clientWidth, img.offsetLeft);
                    }
                }, 200)
            }
        }

        /**
         * Function to scroll to a specific language
         * @param {number} itemWidth_ 
         * @param {number} itemOffset_ 
         */
        static scrollToLanguage(itemWidth_, itemOffset_) {
            console.log(itemWidth_, itemOffset_);

            const container = document.getElementById(App.TranslationService.mainLangContainer);
            if (!Utils.Function.empty(container)) {
                const containerWidth = container.clientWidth;
                const itemWidth = itemWidth_;
                const itemOffsetLeft = itemOffset_;

                // Calculate the scroll position to center the selected language
                const scrollTo = itemOffsetLeft - (containerWidth - itemWidth) / 2;

                container.scrollTo({
                    left: scrollTo,
                    behavior: 'smooth', // Add smooth scrolling animation
                });
            }
        }

        static saveLanguage(language) {
            if (!Utils.Function.empty(language)) {
                Utils.Sessiontorage.save(App.TranslationService.localStorageLanguageTranslationKey, language);
                location.reload();
            }
        }

        /**
         * Asynchronously load translations for the specified language and update the current language.
         *
         * @param {string} language - The language code (e.g., 'en' or 'fr') for which to load translations.
         *
         * @returns {Promise<void>} A promise that resolves when the translations are loaded successfully
         *                          or rejects if an error occurs during the loading process.
         */
        async loadLanguage(language = this.currentLanguage) {
            // Load translations for the specified language
            try {
                const response = await fetch(`lang/lang-${language}.json`);
                if (response.status === 200) {
                    this.translations[language] = await response.json();
                    this.currentLanguage = language;
                } else {
                    console.error(`Failed to load translations for language: ${language}`);
                }
            } catch (error) {
                console.error(`Error loading translations: ${error.message}`);
                throw error;
            }
        }

        /**
         * Asynchronously load translations for the specified language and update the current language.
         *
         * @param {string} language - The language code (e.g., 'en' or 'fr') for which to load translations.
         *
         * @returns {Promise<void>} A promise that resolves when the translations are loaded.
         */

        /**
         * Translate a language key with optional interpolation.
         *
         * @param {string} key - The language key to translate.
         * @param {Object} [interpolateParams={}] - Optional parameters for interpolation.
         *
         * @example
         * // Translates the "greeting" key with the "string" parameter interpolated.
         * // Returns: "Hello User!"
         * TranslateService.instant("greeting", { string: "User" });
         *
         * @returns {string} The translated string or the original key if translation is not found.
         */
        translate(key, interpolateParams = {}) {
            const translation = this.translations[this.currentLanguage];
            key = key.replace('lang.', '');
            if (!Utils.Function.empty(translation[key])) {
                // Perform interpolation if there are interpolateParams
                if (
                    !Utils.Function.empty(interpolateParams) && 
                    typeof interpolateParams === "object"
                ) {
                    return Object.keys(interpolateParams).reduce((result, paramKey) => result.replace(`{{${paramKey}}}`, interpolateParams[paramKey]), translation[key]);
                } else {
                    return translation[key];
                }
            } else {
                console.warn(`Translation for key '${key}' not found in '${this.currentLanguage}' language.`);
                return key; // Return the key itself as a fallback
            }
        }

        /**
         * Replace lang key placeholders with their corresponding values.
         * This function is primarily used for translating HTML pages.
         *
         * @param {string} html - The HTML content with lang key placeholders.
         * @example
         * // Input:
         * // <p>{{'lang.helloWorld' | translate}}</p>
         * // Output:
         * // <p>Hello World!</p>
         *
         * @example
         * // Input:
         * // <p>{{'lang.greeting' | translate : {"string": "User"}}}</p>
         * // Output:
         * // <p>Hello User!</p>
         *
         * @returns {string} The HTML content with all lang variables translated.
         */
        replaceLanguageVariables(html) {
            // This regex pattern is designed to match expressions like {{'lang.greeting' | translate : {"key": "value"}}} and capture different parts of it.
            const regex = /{{'lang\.(.*?)'\s*\|\s*translate(\s*:\s*({[^}]*}))?}}/g;
            const regexOnlyFindLang = /'lang\.(.*?)'\s*\|\s*translate(\s*:\s*({[^}]*}))?/g;

            /**
             * In the regex callback function, we're using the captured components as follows:
             * - langKey: Represents the captured lang key.
             * - colon: Discards the captured colon (:) since it's not needed.
             * - interpolateParams: Represents the captured interpolateParams as a string.
             */
            const parseHtml = html.replace(regex, (match, langKey, colon, interpolateParams) => {
                const params = !Utils.Function.empty(interpolateParams) ? JSON.parse(interpolateParams) : {};
                return this.translate(langKey.trim(), params);
            });
            return parseHtml.replace(regexOnlyFindLang, (match, langKey, colon, interpolateParams) => {
                const params = !Utils.Function.empty(interpolateParams) ? JSON.parse(interpolateParams) : {};
                return this.translate(langKey.trim(), params);
            });
        }
    }
};

window.onload = async (e) => {
    if (e.currentTarget.innerWidth < 1200) {App.MOBILE = true;} else {App.MOBILE = false;}
    if (!App.READY) {

        // Parse the current html body page and translate all the lang keys
        const innerHtmlBodyPage = await new Promise((resolve) => {
            Utils.Function.ajax(e.srcElement.URL, function({response}) {
                App.TranslationServiceObj = new App.TranslationService();
                // Load translations for the current language (e.g., 'en' or 'fr')
                App.TranslationServiceObj.loadLanguage().then(() => {
                    // Replace language variables in an HTML string
                    const html = response;
                    const translatedHtml = App.TranslationServiceObj.replaceLanguageVariables(html);
                    const parser = new DOMParser();
                    const doc = parser.parseFromString(translatedHtml, 'text/html');
                    resolve(doc.getElementsByTagName('body')[0].innerHTML);
                });
            });
        });

        document.body.innerHTML = innerHtmlBodyPage;
        App.init();

        if (document.querySelector('script[src*="tagcanvas"][src$=".js"]')) {
            if (!Utils.Function.empty(TagCanvas) && !Utils.Function.empty(App.myTechCanvas)) {
                TagCanvas.Start('myTechCanvas','tags', {
                    textColour: "#00AAFF",
                    outlineColour: "transparent",
                    reverse: true,
                    depth: 0.8,
                    maxSpeed: 0.05,
                    weight: true
                });
            } else {
                document.getElementById('myTechCanvasContainer').remove();
            }
        }
    }
}