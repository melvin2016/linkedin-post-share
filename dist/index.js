var s=(p,r,e)=>new Promise((t,n)=>{var i=o=>{try{c(e.next(o))}catch(a){n(a)}},h=o=>{try{c(e.throw(o))}catch(a){n(a)}},c=o=>o.done?t(o.value):Promise.resolve(o.value).then(i,h);c((e=e.apply(p,r)).next())});import l,{AxiosError as u}from"axios";var d=class{constructor(r){this.accessToken=r;this.LINKEDIN_BASE_URL="https://api.linkedin.com";this.LINKEDIN_VERSION="202303"}getProfileData(){return s(this,null,function*(){var r;try{return(yield l(`${this.LINKEDIN_BASE_URL}/v2/me`,{method:"GET",headers:{Authorization:`Bearer ${this.accessToken}`}})).data}catch(e){return e instanceof u?(console.error("Cannot get profile data. Error: ",(r=e.response)==null?void 0:r.data),null):(console.error("Something went wrong. Error: ",e),null)}})}getPersonURN(){return s(this,null,function*(){let r=yield this.getProfileData();return!r||!r.id?null:`urn:li:person:${r.id}`})}createImageUploadRequest(r){return s(this,null,function*(){var e;try{return(yield l(`${this.LINKEDIN_BASE_URL}/rest/images?action=initializeUpload`,{method:"POST",headers:{"LinkedIn-Version":this.LINKEDIN_VERSION,Authorization:`Bearer ${this.accessToken}`,"X-Restli-Protocol-Version":"2.0.0"},data:{initializeUploadRequest:{owner:r}}})).data}catch(t){if(t instanceof u){console.error("Cannot create image upload request. Error: ",(e=t.response)==null?void 0:e.data);return}console.error("Something went wrong. Error: ",t)}})}uploadImage(r,e){return s(this,null,function*(){try{let t=yield l(e,{method:"PUT",headers:{"Content-Type":"application/octet-stream",Authorization:`Bearer ${this.accessToken}`},data:r});return t.status!==201?(console.error("Image not created. Status code: ",t.status),!1):!0}catch(t){if(t instanceof u){console.error("Cannot upload image. Error: ",t.cause);return}console.error("Something went wrong. Error: ",t)}})}createPostWithImage(r,e,t){return s(this,null,function*(){var o;let n=yield this.getPersonURN();if(!n){console.error("Cannot get person URN");return}let i=yield this.createImageUploadRequest(n);if(!i){console.error("Cannot create image upload request");return}if(!(yield this.uploadImage(e,i.value.uploadUrl))){console.error("Cannot upload the image");return}let c=i.value.image;try{let a={author:n,commentary:r,visibility:"PUBLIC",distribution:{feedDistribution:"MAIN_FEED",targetEntities:[],thirdPartyDistributionChannels:[]},content:{media:{title:t!=null?t:"Cover image of the post",id:c}},lifecycleState:"PUBLISHED",isReshareDisabledByAuthor:!1},m=yield l(`${this.LINKEDIN_BASE_URL}/rest/posts`,{method:"POST",headers:{"LinkedIn-Version":this.LINKEDIN_VERSION,Authorization:`Bearer ${this.accessToken}`,"Content-Type":"application/json","X-Restli-Protocol-Version":"2.0.0"},data:a});return m.status!==201?(console.error("Image not created. Status code: ",m.status),!1):!0}catch(a){if(a instanceof u){console.error("Cannot create post. Error: ",(o=a.response)==null?void 0:o.data);return}console.error("Something went wrong. Error: ",a)}})}};export{d as default};
