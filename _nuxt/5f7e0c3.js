(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{484:function(t,e,r){var content=r(486);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(89).default)("53f13e3a",content,!0,{sourceMap:!1})},485:function(t,e,r){"use strict";r(484)},486:function(t,e,r){var n=r(88)(!1);n.push([t.i,".jwt-generator textarea{font-family:monospace}",""]),t.exports=n},487:function(t,e,r){"use strict";r.r(e);var n={data:function(){var t={payload:{exp:Math.floor(Date.now()/1e3+43200),iss:"asdfasdfasdf@AdobeOrg",sub:"asdfasdfas@techacct.adobe.com",aud:"https://ims-na1.adobelogin.com/c/asasdfasf"},algorithm:"RS256",privateKey:"-----BEGIN RSA PRIVATE KEY-----\nMIIEogIBAAKCAQEAnzyis1ZjfNB0bBgKFMSvvkTtwlvBsaJq7S5wA+kzeVOVpVWw\nkWdVha4s38XM/pa/yr47av7+z3VTmvDRyAHcaT92whREFpLv9cj5lTeJSibyr/Mr\nm/YtjCZVWgaOYIhwrXwKLqPr/11inWsAkfIytvHWTxZYEcXLgAXFuUuaS3uF9gEi\nNQwzGTU1v0FqkqTBr4B8nW3HCN47XUu0t8Y0e+lf4s4OxQawWD79J9/5d3Ry0vbV\n3Am1FtGJiJvOwRsIfVChDpYStTcHTCMqtvWbV6L11BWkpzGXSW4Hv43qa+GSYOD2\nQU68Mb59oSk2OB+BtOLpJofmbGEGgvmwyCI9MwIDAQABAoIBACiARq2wkltjtcjs\nkFvZ7w1JAORHbEufEO1Eu27zOIlqbgyAcAl7q+/1bip4Z/x1IVES84/yTaM8p0go\namMhvgry/mS8vNi1BN2SAZEnb/7xSxbflb70bX9RHLJqKnp5GZe2jexw+wyXlwaM\n+bclUCrh9e1ltH7IvUrRrQnFJfh+is1fRon9Co9Li0GwoN0x0byrrngU8Ak3Y6D9\nD8GjQA4Elm94ST3izJv8iCOLSDBmzsPsXfcCUZfmTfZ5DbUDMbMxRnSo3nQeoKGC\n0Lj9FkWcfmLcpGlSXTO+Ww1L7EGq+PT3NtRae1FZPwjddQ1/4V905kyQFLamAA5Y\nlSpE2wkCgYEAy1OPLQcZt4NQnQzPz2SBJqQN2P5u3vXl+zNVKP8w4eBv0vWuJJF+\nhkGNnSxXQrTkvDOIUddSKOzHHgSg4nY6K02ecyT0PPm/UZvtRpWrnBjcEVtHEJNp\nbU9pLD5iZ0J9sbzPU/LxPmuAP2Bs8JmTn6aFRspFrP7W0s1Nmk2jsm0CgYEAyH0X\n+jpoqxj4efZfkUrg5GbSEhf+dZglf0tTOA5bVg8IYwtmNk/pniLG/zI7c+GlTc9B\nBwfMr59EzBq/eFMI7+LgXaVUsM/sS4Ry+yeK6SJx/otIMWtDfqxsLD8CPMCRvecC\n2Pip4uSgrl0MOebl9XKp57GoaUWRWRHqwV4Y6h8CgYAZhI4mh4qZtnhKjY4TKDjx\nQYufXSdLAi9v3FxmvchDwOgn4L+PRVdMwDNms2bsL0m5uPn104EzM6w1vzz1zwKz\n5pTpPI0OjgWN13Tq8+PKvm/4Ga2MjgOgPWQkslulO/oMcXbPwWC3hcRdr9tcQtn9\nImf9n2spL/6EDFId+Hp/7QKBgAqlWdiXsWckdE1Fn91/NGHsc8syKvjjk1onDcw0\nNvVi5vcba9oGdElJX3e9mxqUKMrw7msJJv1MX8LWyMQC5L6YNYHDfbPF1q5L4i8j\n8mRex97UVokJQRRA452V2vCO6S5ETgpnad36de3MUxHgCOX3qL382Qx9/THVmbma\n3YfRAoGAUxL/Eu5yvMK8SAt/dJK6FedngcM3JEFNplmtLYVLWhkIlNRGDwkg3I5K\ny18Ae9n7dHVueyslrb6weq7dTkYDi3iOYRW8HRkIQh06wEdbxt0shTzAJvvCQfrB\njg/3747WSsf/zBTcHihTRBdAv6OmdhV4/dD5YBfLAkLrd+mX7iE=\n-----END RSA PRIVATE KEY-----"};return{jwt:this.$generateJWT(t.payload,t.privateKey,t.algorithm),jwtPayload:t.payload,jwtAlgorithm:t.algorithm,jwtPrivateKey:t.privateKey,jwtError:"Generated JWT goes here"}},methods:{updateJWT:function(t){try{this.jwt=this.$generateJWT(this.jwtPayload,this.jwtPrivateKey,this.jwtAlgorithm)}catch(t){this.jwt=null,this.jwtError="ERROR generating JWT! The provided JSON payload or private key is likely invalid. See stacktrace below:\n\n=============================================================\n"+t.stack+"\n=============================================================\n"}}}},o=(r(485),r(83)),component=Object(o.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"jwt-generator"},[r("h1",[t._v("JWT "+t._s(t.jwtAlgorithm)+" generator")]),t._v(" "),r("br"),t._v(" "),r("b-container",{attrs:{fluid:""}},[r("b-input-group",{attrs:{prepend:"JWT Payload"}},[r("b-form-textarea",{attrs:{id:"textarea-jwt-payload",placeholder:"JWT payload goes here",rows:"2","max-rows":"15"},on:{input:t.updateJWT},model:{value:t.jwtPayload,callback:function(e){t.jwtPayload=e},expression:"jwtPayload"}})],1),t._v(" "),r("br"),t._v(" "),r("b-input-group",{attrs:{prepend:"JWT Private Key"}},[r("b-form-textarea",{attrs:{id:"textarea-jwt-private-key",placeholder:"JWT private key goes here",rows:"2","max-rows":"5"},on:{input:t.updateJWT},model:{value:t.jwtPrivateKey,callback:function(e){t.jwtPrivateKey=e},expression:"jwtPrivateKey"}})],1),t._v(" "),r("br"),t._v(" "),r("b-input-group",{attrs:{prepend:"Generated JWT"}},[r("b-form-textarea",{attrs:{id:"textarea-jwt-generated",placeholder:t.jwtError,rows:"8","max-rows":"50"},model:{value:t.jwt,callback:function(e){t.jwt=e},expression:"jwt"}})],1)],1),t._v(" "),r("br"),r("br"),r("br")],1)}),[],!1,null,null,null);e.default=component.exports}}]);