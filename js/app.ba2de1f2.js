(function(){var t={5921:function(t,e,s){"use strict";var n=s(144),c=function(){var t=this,e=t._self._c;return e("div",[e("GameMain")],1)},i=[],a=function(){var t=this,e=t._self._c;return e("main",{staticClass:"game-main",style:{height:t.windowHeight+"px"}},[e("div",{staticClass:"main-wrapper"},[e("div",{staticClass:"game-view"},[e("GameHeader"),"info"===t.actualView.type?e("InfoContent"):t._e(),"sections"===t.actualView.type?e("GameSections"):t._e(),"answersButtons"===t.actualView.type?e("AnswersButtons"):t._e(),"answersCheckboxes"===t.actualView.type?e("AnswersCheckboxes"):t._e(),e("GameFooter",{attrs:{footerData:t.actualView.footer}})],1)])])},r=[],o=s(629),u=function(){var t=this,e=t._self._c;return e("div",{staticClass:"content-overflow"},[e("div",{staticClass:"content-wrapper"},t._l(t.actualView.bodyContent,(function(s,n){return e("div",{key:n,staticClass:"content-body"},[s.contentTitle?e("InfoTitle",{attrs:{contentTitle:s.contentTitle}}):t._e(),s.contentText?e("InfoText",{attrs:{contentText:s.contentText}}):t._e(),s.contentImage?e("InfoImage",{attrs:{contentImage:s.contentImage}}):t._e(),s.contentPercent?e("InfoPercent"):t._e()],1)})),0),t.actualView.feedback?e("UserFeedback"):t._e()],1)},l=[],p=function(){var t=this,e=t._self._c;return e("div",{staticClass:"info-title",domProps:{innerHTML:t._s(t.contentTitle)}})},d=[],m={name:"InfoTitle",props:{contentTitle:String}},b=m,h=s(1001),f=(0,h.Z)(b,p,d,!1,null,null,null),_=f.exports,g=function(){var t=this,e=t._self._c;return e("div",{staticClass:"info-text",domProps:{innerHTML:t._s(t.contentText)}})},x=[],v={name:"InfoText",props:{contentText:String}},w=v,C=(0,h.Z)(w,g,x,!1,null,null,null),k=C.exports,y=function(){var t=this,e=t._self._c;return 2===t.contentImage.length?e("div",{staticClass:"content-image-double"},t._l(t.contentImage,(function(s,n){return e("div",{key:n,staticClass:"content-image-double-item"},[s.image?e("img",{attrs:{src:t.getImage(n),alt:"image"}}):t._e(),s.bottomLabel?e("ImageBottomLabel",{attrs:{textBottomLabel:s.bottomLabel}}):t._e(),s.secondBottomLabel?e("ImageBottomLabelSecond",{attrs:{textBottomLabel:s.secondBottomLabel}}):t._e()],1)})),0):1===t.contentImage.length?e("div",{staticClass:"content-image-single"},[e("div",{staticClass:"image-single"},[t.contentImage[0].image?e("img",{attrs:{src:t.getImage(0),alt:"image"}}):t._e(),t.contentImage[0].bottomLabel?e("ImageBottomLabel",{attrs:{textBottomLabel:t.contentImage[0].bottomLabel}}):t._e()],1)]):t._e()},A=[],T=function(){var t=this,e=t._self._c;return e("div",{staticClass:"image-bottom-label",domProps:{innerHTML:t._s(t.textBottomLabel)}})},I=[],S={name:"ImageBottomLabel",props:{textBottomLabel:String}},P=S,D=(0,h.Z)(P,T,I,!1,null,null,null),N=D.exports,V=function(){var t=this,e=t._self._c;return e("div",{staticClass:"image-bottom-label-second",domProps:{innerHTML:t._s(t.textBottomLabel)}})},B=[],L={name:"ImageBottomLabelSecond",props:{textBottomLabel:String}},E=L,O=(0,h.Z)(E,V,B,!1,null,null,null),M=O.exports,F={name:"InfoImage",components:{ImageBottomLabel:N,ImageBottomLabelSecond:M},props:{contentImage:[]},methods:{getImage(t){return s(990)(`./${this.contentImage[t].image}`)}}},j=F,H=(0,h.Z)(j,y,A,!1,null,null,null),Z=H.exports,G=function(){var t=this,e=t._self._c;return e("div",{staticClass:"main-feedback"},[t.feedback.isSent?t._e():e("div",{staticClass:"feedback-wrapper"},[e("div",{staticClass:"bg-header"},[t._m(0),e("div",{staticClass:"fb-header-text"},[t._v(" Поздравляем! Вы справились с заданием лучше чем "+t._s(t.randomPercent)+"% пользователей! ")])]),e("div",{staticClass:"fb-useful-question"},[e("div",{staticClass:"fb-useful-question-text question-width"},[t._v(" Кейс был полезным для Вас? ")]),e("div",{staticClass:"fb-checkbox-row"},[e("div",{staticClass:"fb-checbox-container",on:{click:function(e){return t.setFeedback("useful",!0)}}},[e("div",{staticClass:"fb-round-checkbox"},[t.feedback.useful?e("div",{staticClass:"fb-round-checkbox-checked"}):t._e()]),e("div",{staticClass:"fb-checkbox-text"},[t._v("Да")])]),e("div",{staticClass:"fb-checbox-container",on:{click:function(e){return t.setFeedback("useful",!1)}}},[e("div",{staticClass:"fb-round-checkbox"},[t.feedback.useful?t._e():e("div",{staticClass:"fb-round-checkbox-checked"})]),e("div",{staticClass:"fb-checkbox-text"},[t._v("Нет")])])])]),t.feedback.useful?e("div",{staticClass:"fb-thanks-info-text"},[t._v(" Спасибо, скоро выложим новые сценари, заходите проверить себя! ")]):t._e(),t.feedback.useful?t._e():e("div",{staticClass:"fb-not-useful-rows"},[e("div",{staticClass:"fb-question-not-like"},[t._v(" Поделитесь, что вам не понравилось? ")]),e("div",{staticClass:"fb-useful-question"},[e("div",{staticClass:"fb-useful-question-text question-width"},[t._v(" Сложность ")]),e("div",{staticClass:"fb-checkbox-row"},[e("div",{staticClass:"fb-checbox-container",on:{click:function(e){return t.setFeedback("complexity",1)}}},[e("div",{staticClass:"fb-round-checkbox"},[1===t.feedback.complexity?e("div",{staticClass:"fb-round-checkbox-checked"}):t._e()]),e("div",{staticClass:"fb-checkbox-text checkbox-text-width"},[t._v("Слишком сложно")])]),e("div",{staticClass:"fb-checbox-container",on:{click:function(e){return t.setFeedback("complexity",2)}}},[e("div",{staticClass:"fb-round-checkbox"},[2===t.feedback.complexity?e("div",{staticClass:"fb-round-checkbox-checked"}):t._e()]),e("div",{staticClass:"fb-checkbox-text checkbox-text-width"},[t._v("Слишком просто")])])])]),e("div",{staticClass:"fb-useful-question"},[e("div",{staticClass:"fb-useful-question-text question-width"},[t._v(" Частотность ")]),e("div",{staticClass:"fb-checkbox-row"},[e("div",{staticClass:"fb-checbox-container",on:{click:function(e){return t.setFeedback("frequency",1)}}},[e("div",{staticClass:"fb-round-checkbox"},[1===t.feedback.frequency?e("div",{staticClass:"fb-round-checkbox-checked"}):t._e()]),e("div",{staticClass:"fb-checkbox-text checkbox-text-width"},[t._v("Слишком редкая ситуация")])]),e("div",{staticClass:"fb-checbox-container",on:{click:function(e){return t.setFeedback("frequency",2)}}},[e("div",{staticClass:"fb-round-checkbox"},[2===t.feedback.frequency?e("div",{staticClass:"fb-round-checkbox-checked"}):t._e()]),e("div",{staticClass:"fb-checkbox-text checkbox-text-width"},[t._v("Слишком частая ситуация")])])])]),e("div",{staticClass:"fb-useful-question"},[e("div",{staticClass:"fb-useful-question-text question-width"},[t._v(" Диагноз и лечение ")]),e("div",{staticClass:"fb-checkbox-row"},[e("div",{staticClass:"fb-checbox-container",on:{click:function(e){return t.setFeedback("disagreeDiagnosis",!t.feedback.disagreeDiagnosis)}}},[e("div",{staticClass:"fb-round-checkbox"},[t.feedback.disagreeDiagnosis?e("div",{staticClass:"fb-round-checkbox-checked"}):t._e()]),e("div",{staticClass:"fb-checkbox-text checkbox-text-width"},[t._v("Не согласен с решением")])])])])]),e("div",{staticClass:"fb-rate"},[e("div",{staticClass:"fb-rate-text"},[t._v(" Оцените сложность сценария: ")]),e("div",{staticClass:"fb-stars-and-text"},[t._m(1),e("div",{staticClass:"fb-stars"},t._l(t.stars,(function(n,c){return e("div",{key:`st-${c}`,staticClass:"cursor-pointer",on:{mouseover:function(e){t.starHover=n},mouseleave:function(e){t.starHover=0},click:function(e){return t.setFeedback("stars",n)}}},[t.feedback.stars<n?e("img",{staticClass:"fb-star",attrs:{src:s(3111),alt:"star"}}):t._e(),t.feedback.stars>=n?e("img",{staticClass:"fb-star",attrs:{src:s(3632),alt:"star"}}):t._e()])})),0)])]),e("div",{staticClass:"fb-comment"},[e("div",{staticClass:"fb-comment-text"},[t._v(" Пожалуйста, оставьте ваш комментарий по данному сценарию: ")]),e("div",{staticClass:"fb-comment-field-wrapper"},[e("textarea",{staticClass:"fb-textarea-field",on:{change:function(e){return t.setFeedback("comment",e.target.value)},focus:t.onResize}})])]),e("div",{staticClass:"fb-comment"},[e("div",{staticClass:"fb-comment-text"},[t._v(" Кейс на какую тему Вам было бы интересно потренировать ")]),e("div",{staticClass:"fb-comment-field-wrapper"},[e("textarea",{staticClass:"fb-textarea-field",on:{change:function(e){return t.setFeedback("interestingCase",e.target.value)}}})])]),e("div",{staticClass:"fb-button-wrapper"},[e("button",{staticClass:"fb-button",on:{click:t.sendFeedback}},[t._v(" Отправить ")])])]),t.feedback.isSent?e("div",{staticClass:"bg-end-text-div"},[t._m(2)]):t._e()])},R=[function(){var t=this,e=t._self._c;return e("div",{staticClass:"bg-header-cup"},[e("img",{staticClass:"fb-image-cup",attrs:{src:s(3129),alt:"cup"}})])},function(){var t=this,e=t._self._c;return e("div",{staticClass:"fb-stars-text"},[e("span",[t._v("слишком просто")]),e("span",[t._v("слишком сложно")])])},function(){var t=this,e=t._self._c;return e("span",{staticClass:"bg-end-text-span"},[t._v(" Спасибо! "),e("p",[t._v("Ваше мнение очень ценно для нас, мы обязательно учтем его при разработке следующих сценариев!")])])}],q={name:"UserFeedback",data(){return{stars:[1,2,3,4,5,6,7,8,9,10]}},computed:{...(0,o.Se)(["feedback"]),randomPercent(){return(15*Math.random()+70).toFixed(0)}},methods:{...(0,o.nv)(["setFeedbackItem","SEND_DATA_TO_API","setWindowHeight"]),setFeedback(t,e){this.setFeedbackItem({name:t,value:e})},sendFeedback(){this.SEND_DATA_TO_API({type:"feedback",feedback:this.feedback}),this.setFeedback("isSent",!0)},onResize(){this.setWindowHeight(window.innerHeight)}}},W=q,$=(0,h.Z)(W,G,R,!1,null,null,null),U=$.exports,z=function(){var t=this,e=t._self._c;return e("div",{staticClass:"percent-wrapper"},[e("img",{staticClass:"percent-image",attrs:{src:s(3129),alt:"cup",width:"30"}}),e("span",{staticClass:"percent-text"},[t._v(" Только "+t._s(t.randomPercent)+"% пользователей сумели пройти этот сценарий с первого раза! ")])])},Y=[],J={name:"InfoPercent",computed:{randomPercent(){return(12*Math.random()+61).toFixed(0)}}},K=J,Q=(0,h.Z)(K,z,Y,!1,null,null,null),X=Q.exports,tt={name:"InfoContent",data(){return{isAccept:!1}},components:{InfoTitle:_,InfoText:k,InfoImage:Z,UserFeedback:U,InfoPercent:X},computed:{...(0,o.Se)(["gameData","stepNumber","actualView","actualProperty"])},methods:{...(0,o.nv)(["setAcceptCheckbox"]),changeAccept(){this.isAccept=!this.isAccept,this.setAcceptCheckbox(this.isAccept)}}},et=tt,st=(0,h.Z)(et,u,l,!1,null,null,null),nt=st.exports,ct=function(){var t=this,e=t._self._c;return e("div",{staticClass:"game-sections"},[e("div",{staticClass:"sections-wrapper"},t._l(t.actualView.sections,(function(s,n){return e("SectionButton",{key:n,attrs:{sectionItem:s,numberItem:n},on:{openSection:function(e){return t.openSection(e)}}})})),1)])},it=[],at=function(){var t=this,e=t._self._c;return e("div",{staticClass:"section-item",on:{click:function(e){return t.openSection()}}},[e("div",{staticClass:"section-image-container"},[e("img",{attrs:{src:t.buttonImage,alt:"button image"}})]),e("div",{staticClass:"section-text"},[t._v(" "+t._s(t.buttonName)+" ")])])},rt=[],ot={name:"SectionButton",props:{sectionItem:{},numberItem:Number},computed:{buttonImage(){return s(990)(`./${this.sectionItem.image}`)},buttonName(){return this.sectionItem.sectionName}},methods:{openSection(){this.$emit("openSection",this.numberItem)}}},ut=ot,lt=(0,h.Z)(ut,at,rt,!1,null,null,null),pt=lt.exports,dt={name:"GameSections",components:{SectionButton:pt},computed:{...(0,o.Se)(["actualView"])},methods:{...(0,o.nv)(["setActualView","setViewedSection"]),openSection(t){this.setActualView(this.actualView.sections[t].sectionContent),this.setViewedSection(t)}}},mt=dt,bt=(0,h.Z)(mt,ct,it,!1,null,null,null),ht=bt.exports,ft=function(){var t=this,e=t._self._c;return e("div",{staticClass:"answers-buttons"},[e("AnswerHint",{attrs:{numberTry:t.actualProperty.numberTry}}),e("ul",{staticClass:"answers-buttons-grid"},t._l(t.actualView.bodyButtons,(function(s,n){return e("AnswerButton",{key:n,attrs:{answerButtonInfo:s,answerNumber:n,currentAnswerNumber:t.currentAnswerNumber,notOneButtonSelected:t.notOneButtonSelected,isDisable:t.actualProperty.completed},on:{selectButton:function(e){return t.selectButton(e)}}})})),1)],1)},_t=[],gt=function(){var t=this,e=t._self._c;return e("li",{staticClass:"answer-button",class:{"answer-button-selected":t.isSelected,"answer-button-not-selected":!t.isSelected&&!t.isDisable},on:{click:t.buttonClick}},[e("div",{staticClass:"answer-button-text"},[t._v(" "+t._s(t.answerButtonInfo.buttonText)+" ")])])},xt=[],vt={name:"AnswerButton",components:{},props:{answerButtonInfo:{},answerNumber:Number,currentAnswerNumber:Number,notOneButtonSelected:Boolean,isDisable:Boolean},computed:{isSelected(){return this.answerNumber===this.currentAnswerNumber}},methods:{buttonClick(){this.isDisable||this.$emit("selectButton",this.answerNumber)}},mounted(){}},wt=vt,Ct=(0,h.Z)(wt,gt,xt,!1,null,null,null),kt=Ct.exports,yt=function(){var t=this,e=t._self._c;return e("div",{staticClass:"answer-hint"},[t._v(" После трех неверных ответов будет дана подсказка. Осталось "+t._s(t.remainedTry)+" попытки из 3-х. ")])},At=[],Tt={name:"AnswerHint",props:{numberTry:Number},computed:{remainedTry(){return 3-this.numberTry}}},It=Tt,St=(0,h.Z)(It,yt,At,!1,null,null,null),Pt=St.exports,Dt={name:"AnswersButtons",components:{AnswerButton:kt,AnswerHint:Pt},computed:{...(0,o.Se)(["actualView","actualProperty","stepNumber"]),notOneButtonSelected(){return null===this.actualProperty.currentAnswer},currentAnswerNumber(){return this.actualProperty.currentAnswer}},methods:{...(0,o.nv)(["setCurrentAnswer"]),selectButton(t){this.setCurrentAnswer(t)}}},Nt=Dt,Vt=(0,h.Z)(Nt,ft,_t,!1,null,null,null),Bt=Vt.exports,Lt=function(){var t=this,e=t._self._c;return e("div",{staticClass:"game-checkboxes"},[e("div",{staticClass:"answers-checkboxes"},[e("h2",{staticClass:"answers-checkboxes-title"},[t._v(" "+t._s(t.actualView.headerText)+" ")]),e("AnswerHint",{attrs:{numberTry:t.actualProperty.numberTry}}),e("ul",{staticClass:"answers-checkboxes-grid"},t._l(t.actualView.bodyCheckboxes,(function(s,n){return e("AnswerCheckbox",{key:n,attrs:{answerCheckboxInfo:s,isChecked:t.actualProperty.checkboxList[n],answerNumber:n,isDisable:t.actualProperty.completed},on:{selectCheckbox:function(e){return t.selectCheckbox(n)}}})})),1)],1)])},Et=[],Ot=function(){var t=this,e=t._self._c;return e("li",[e("div",{staticClass:"answer-checkbox"},[e("div",[e("div",{staticClass:"answer-checkbox-rectangle",class:{"white-checkbox":!t.isChecked,"purple-checkbox":t.isChecked,"cursor-pointer":!t.isDisable},on:{click:t.selectCheckbox}},[t.isChecked?e("img",{attrs:{src:s(3808),alt:"check mark"}}):t._e()])]),e("div",{staticClass:"answer-checkbox-text",class:{"cursor-pointer":!t.isDisable},on:{click:t.selectCheckbox}},[t._v(" "+t._s(t.answerCheckboxInfo.checkboxText)+" ")])])])},Mt=[],Ft={name:"AnswerCheckbox",props:{answerCheckboxInfo:{},answerNumber:Number,isChecked:Boolean,isDisable:Boolean},computed:{},methods:{selectCheckbox(){this.isDisable||this.$emit("selectCheckbox",this.answerNumber)}}},jt=Ft,Ht=(0,h.Z)(jt,Ot,Mt,!1,null,null,null),Zt=Ht.exports,Gt={name:"AnswersCheckboxes",components:{AnswerCheckbox:Zt,AnswerHint:Pt},computed:{...(0,o.Se)(["actualView","actualProperty","stepNumber"])},methods:{...(0,o.nv)(["changeAnswerCheckbox"]),selectCheckbox(t){this.changeAnswerCheckbox(t)}}},Rt=Gt,qt=(0,h.Z)(Rt,Lt,Et,!1,null,null,null),Wt=qt.exports,$t=function(){var t=this,e=t._self._c;return e("div",[e("div",{staticClass:"top-stripe"}),e("StepIndicator"),e("GameTitle",{attrs:{titleText:t.titleText}})],1)},Ut=[],zt=function(){var t=this,e=t._self._c;return e("div",{staticClass:"step-indicator"},t._l(t.tolalIndicators,(function(s,n){return e("IndicatorItem",{key:n,attrs:{indicatorNumber:n,stepNumber:t.numberIndicator}})})),1)},Yt=[],Jt=function(){var t=this,e=t._self._c;return e("div",{staticClass:"indicator-item",class:{"colored-indicator":t.isColored,"not-colored-indicator":!t.isColored}})},Kt=[],Qt={name:"IndicatorItem",props:{indicatorNumber:Number,stepNumber:Number},computed:{isColored(){return this.indicatorNumber<=this.stepNumber}}},Xt=Qt,te=(0,h.Z)(Xt,Jt,Kt,!1,null,null,null),ee=te.exports,se={name:"StepIndicator",components:{IndicatorItem:ee},computed:{...(0,o.Se)(["stepNumber","actualView","tolalIndicators","numberIndicator"])}},ne=se,ce=(0,h.Z)(ne,zt,Yt,!1,null,null,null),ie=ce.exports,ae=function(){var t=this,e=t._self._c;return e("h1",{staticClass:"main-title"},[t._v(" "+t._s(t.titleText)+" ")])},re=[],oe={name:"GameTitle",props:{titleText:String}},ue=oe,le=(0,h.Z)(ue,ae,re,!1,null,null,null),pe=le.exports,de={name:"GameHeader",components:{StepIndicator:ie,GameTitle:pe},computed:{...(0,o.Se)(["stepNumber","actualView"]),titleText(){return this.actualView.title}}},me=de,be=(0,h.Z)(me,$t,Ut,!1,null,null,null),he=be.exports,fe=function(){var t=this,e=t._self._c;return e("div",{staticClass:"game-footer"},[t.actualView.acceptCheckbox?e("InfoNotification"):t._e(),e("FooterButtons")],1)},_e=[],ge=function(){var t=this,e=t._self._c;return e("div",{staticClass:"footer-buttons"},[t._l(t.actualView.footerButtonList,(function(s,n){return e("FooterButton",{key:n,attrs:{buttonData:s},on:{buttonClick:function(e){return t.buttonClick(e)}}})})),t.showModal?e("ModalWarning",{attrs:{correct:t.correct,warningText:t.warningText},on:{closeModal:t.closeModal}}):t._e()],2)},xe=[],ve=function(){var t=this,e=t._self._c;return e("button",{staticClass:"footer-button",on:{click:t.buttonClick}},[e("div",[t._v(t._s(t.buttonData.name))])])},we=[],Ce={name:"FooterButton",props:{buttonData:{}},computed:{},methods:{buttonClick(){this.$emit("buttonClick",this.buttonData.action)}}},ke=Ce,ye=(0,h.Z)(ke,ve,we,!1,null,null,null),Ae=ye.exports,Te=function(){var t=this,e=t._self._c;return e("div",{staticClass:"modal-warning",on:{click:t.closeModal}},[t.correct?e("div",{staticClass:"correct-warning"},[e("div",{staticClass:"warning-text"},[t._v(" "+t._s(t.warningText)+" ")])]):e("div",{staticClass:"uncorrect-warning"},[e("div",{staticClass:"warning-text"},[t._v(" "+t._s(t.warningText)+" ")])])])},Ie=[],Se={name:"ModalWarning",props:{correct:Boolean,warningText:String},methods:{closeModal(){this.$emit("closeModal")}}},Pe=Se,De=(0,h.Z)(Pe,Te,Ie,!1,null,null,null),Ne=De.exports,Ve={name:"FooterButtons",components:{FooterButton:Ae,ModalWarning:Ne},data(){return{showModal:!1,correct:!1,warningText:""}},computed:{...(0,o.Se)(["actualView","actualProperty","completed","stepNumber","testId"])},methods:{...(0,o.nv)(["nextStep","previousStep","returnActualView","setCompleted","setCurrentAnswer","SEND_DATA_TO_API","newStart","increaseIndicator"]),buttonClick(t){if("next"===t)if(this.completed)this.nextStep();else if("answersButtons"===this.actualView.type)this.actualProperty.currentAnswer&&this.actualView.bodyButtons[this.actualProperty.currentAnswer].isRight?(this.SEND_DATA_TO_API({type:this.actualView.type,currentAnswer:this.actualProperty.currentAnswer,isRight:!0,numberTry:this.actualProperty.numberTry}),this.setCompleted(!0),this.increaseIndicator(1),this.openModal(!0,"Диагноз верный!",(()=>{this.nextStep()}))):2===this.actualProperty.numberTry?(this.actualProperty.numberTry+=1,this.SEND_DATA_TO_API({type:this.actualView.type,currentAnswer:this.actualProperty.currentAnswer,isRight:!1,numberTry:this.actualProperty.numberTry}),this.setCompleted(!0),this.openModal(!1,"Диагноз не верный!",(()=>{})),this.setTrueAnswer(),this.increaseIndicator(1)):this.actualProperty.numberTry<2&&(this.SEND_DATA_TO_API({type:this.actualView.type,currentAnswer:this.actualProperty.currentAnswer,isRight:!1,numberTry:this.actualProperty.numberTry}),this.actualProperty.numberTry+=1,this.openModal(!1,"Диагноз не верный!",(()=>{})));else if("answersCheckboxes"===this.actualView.type){for(let t=0;t<this.actualView.bodyCheckboxes.length;t++)if(this.actualView.bodyCheckboxes[t].isRight!==this.actualProperty.checkboxList[t]){if(2===this.actualProperty.numberTry)return this.actualProperty.numberTry+=1,this.SEND_DATA_TO_API({type:this.actualView.type,currentAnswer:this.actualProperty.checkboxList,isRight:!1,numberTry:this.actualProperty.numberTry}),this.openModal(!1,"Выбранное лечение не верное!",(()=>{})),this.setTrueCheckboxes((()=>{this.setCompleted(!0)})),void this.increaseIndicator(1);if(this.actualProperty.numberTry<2)return this.actualProperty.numberTry+=1,this.SEND_DATA_TO_API({type:this.actualView.type,currentAnswer:this.actualProperty.checkboxList,isRight:!1,numberTry:this.actualProperty.numberTry}),void this.openModal(!1,"Скорректируйте лечение!",(()=>{}))}this.SEND_DATA_TO_API({type:this.actualView.type,currentAnswer:this.actualProperty.checkboxList,isRight:!0,numberTry:this.actualProperty.numberTry}),this.setCompleted(!0),this.increaseIndicator(1),this.openModal(!0,"Лечение верное!",(()=>{this.nextStep()}))}else if("sections"===this.actualView.type)this.SEND_DATA_TO_API({type:this.actualView.type}),this.setCompleted(!0),this.increaseIndicator(1),this.nextStep();else if("info"===this.actualView.type){if(this.actualView.acceptCheckbox&&!1===this.actualProperty.acceptCheckbox)return;this.SEND_DATA_TO_API({type:this.actualView.type}),this.setCompleted(!0),this.increaseIndicator(1),this.nextStep()}"previous"===t&&this.previousStep(),"return"===t&&this.returnActualView(),"startAgain"===t&&this.newStart()},async openModal(t,e,s){this.correct=t,this.showModal=!0,this.warningText=e,await this.sleep(1e3),this.showModal=!1,s()},closeModal(){this.showModal=!1},setTrueAnswer(){for(let t=0;t<this.actualView.bodyButtons.length;t++)this.actualView.bodyButtons[t].isRight&&this.setCurrentAnswer(t)},async setTrueCheckboxes(t){for(let e=0;e<this.actualView.bodyCheckboxes.length;e++)this.actualProperty.checkboxList[e]=this.actualView.bodyCheckboxes[e].isRight;t()},sleep(t){return new Promise((e=>setTimeout(e,t)))}}},Be=Ve,Le=(0,h.Z)(Be,ge,xe,!1,null,null,null),Ee=Le.exports,Oe=function(){var t=this,e=t._self._c;return e("div",{staticClass:"notification-wrapper"},[e("div",{staticClass:"notification-text"},[t._v(" Материал создан исключительно в образовательных целях и предназначен только для специалистов здравоохранения. Любое совпадение с реальными пациентами случайно. Тактика лечения определяется лечащим врачом. ")]),t.actualView.acceptCheckbox?e("AcceptCheckbox",{attrs:{isAccept:t.isAccept},on:{changeAccept:t.changeAccept}}):t._e()],1)},Me=[],Fe=function(){var t=this,e=t._self._c;return e("div",{staticClass:"accept-checkbox"},[e("div",{staticClass:"accept-checkbox-rectangle",on:{click:t.changeAccept}},[t.isAccept?e("img",{attrs:{src:s(8810),alt:"check mark"}}):t._e()]),e("div",{staticClass:"accept-checkbox-text",on:{click:t.changeAccept}},[t._v(" Принимаю ")])])},je=[],He={name:"AcceptCheckbox",props:{isAccept:Boolean},methods:{changeAccept(){this.$emit("changeAccept")}}},Ze=He,Ge=(0,h.Z)(Ze,Fe,je,!1,null,null,null),Re=Ge.exports,qe={name:"InfoNotification",data(){return{isAccept:!1}},components:{AcceptCheckbox:Re},computed:{...(0,o.Se)(["actualView"])},methods:{...(0,o.nv)(["setAcceptCheckbox"]),changeAccept(){this.isAccept=!this.isAccept,this.setAcceptCheckbox(this.isAccept)}}},We=qe,$e=(0,h.Z)(We,Oe,Me,!1,null,null,null),Ue=$e.exports,ze={name:"GameFooter",components:{FooterButtons:Ee,InfoNotification:Ue},props:{footerData:{}},computed:{...(0,o.Se)(["actualView"])}},Ye=ze,Je=(0,h.Z)(Ye,fe,_e,!1,null,null,null),Ke=Je.exports,Qe={name:"GameMain",components:{InfoContent:nt,GameSections:ht,AnswersButtons:Bt,AnswersCheckboxes:Wt,GameHeader:he,GameFooter:Ke},computed:{...(0,o.Se)(["gameData","stepNumber","actualView","windowHeight"])},methods:{...(0,o.nv)(["GET_DATA_FROM_API","GET_DATA_FROM_LOCAL","setWindowHeight"]),onResize(){this.setWindowHeight(window.innerHeight)}},created(){this.GET_DATA_FROM_API(1)},mounted(){this.$nextTick((()=>{window.addEventListener("resize",this.onResize)}))},beforeDestroy(){window.removeEventListener("resize",this.onResize)}},Xe=Qe,ts=(0,h.Z)(Xe,a,r,!1,null,null,null),es=ts.exports,ss={name:"App",components:{GameMain:es}},ns=ss,cs=(0,h.Z)(ns,c,i,!1,null,null,null),is=cs.exports,as=(s(7658),s(196));n["default"].use(o.ZP);const rs=new o.ZP.Store({state:{testId:0,testData:{},gameData:[],actualView:{},actualProperty:{},stepNumber:0,propertyList:[],tolalIndicators:0,numberIndicator:0,feedback:{isSent:!1,useful:!0,complexity:0,frequency:0,disagreeDiagnosis:!1,stars:0,comment:"",interestingCase:""},windowHeight:window.innerHeight},getters:{gameData(t){return t.gameData},stepNumber(t){return t.stepNumber},actualView(t){return t.actualView},actualProperty(t){return t.actualProperty},completed(t){return t.actualProperty.completed},feedback(t){return t.feedback},tolalIndicators(t){return t.tolalIndicators},numberIndicator(t){return t.numberIndicator},windowHeight(t){return t.windowHeight}},mutations:{SET_TESTDATA_TO_STATE(t,e){t.testData=e,t.testId=e.data.data.id},SET_GAMEDATA_TO_STATE(t,e){t.gameData=e},setStepNumber(t,e){t.stepNumber=e},setActualView(t,e){t.actualView=e},createEmptyPropertyList(t,e){const s=rs.state.propertyList;if(s.length>0)return;const n=e;let c=0;for(let i=0;i<n.length;i++){let t={};if(c+=1,t.completed=!1,"sections"===n[i].body.type){t.viewedSections=[];for(let e=0;e<n[i].body.sections.length;e++)c+=1,t.viewedSections.push(!1)}else if("answersButtons"===n[i].body.type)t.currentAnswer=null,t.numberTry=0;else if("answersCheckboxes"===n[i].body.type){t.checkboxList=[];for(let e=0;e<n[i].body.bodyCheckboxes.length;e++)t.checkboxList.push(!1);t.numberTry=0}n[i].body.acceptCheckbox&&(t.acceptCheckbox=!1),s.push(t)}t.propertyList=s,t.tolalIndicators=c},setActualProperty(t,e){t.actualProperty=t.propertyList[e]},setCurrentAnswer(t,e){t.actualProperty.currentAnswer=e},changeAnswerCheckbox(t,e){n["default"].set(t.actualProperty.checkboxList,e,!t.actualProperty.checkboxList[e])},setCompleted(t,e){t.actualProperty.completed=e},setFeedbackItem(t,e){t.feedback[e.name]=e.value},setAcceptCheckbox(t,e){t.actualProperty.acceptCheckbox=e},setViewedSection(t,e){t.actualProperty.viewedSections[e]=!0},increaseIndicator(t,e){t.numberIndicator+=e},clearState(t){t.propertyList.length=0,t.feedback={isSent:!1,useful:!0,complexity:0,frequency:0,disagreeDiagnosis:!1,stars:0,comment:"",interestingCase:""}},setWindowHeight(t,e){t.windowHeight=e}},actions:{GET_DATA_FROM_API({commit:t},e){return(0,as.ZP)(`https://tech1.med-game.ru/api/v1/test/${e}`,{method:"GET"}).then((e=>(t("SET_TESTDATA_TO_STATE",e),e.data.data.questions))).then((e=>(t("SET_GAMEDATA_TO_STATE",e),e))).then((e=>(t("createEmptyPropertyList",e),e))).then((e=>(t("setStepNumber",0),e[0].body))).then((e=>(t("setActualView",e),0))).then((e=>{t("setActualProperty",e)})).catch((t=>(console.log("Ошибка:"),console.log(t),t)))},GET_DATA_FROM_LOCAL({commit:t},e){return t("SET_TESTDATA_TO_STATE",e),t("SET_GAMEDATA_TO_STATE",e.data.data.questions),t("createEmptyPropertyList",e.data.data.questions),t("setStepNumber",0),rs.dispatch("SET_ACTUAL_VIEW",rs.state.stepNumber)},SET_ACTUAL_VIEW({commit:t},e){return t("setActualView",rs.state.gameData[e].body),rs.dispatch("SET_ACTUAL_PROPERTY",e)},SET_ACTUAL_PROPERTY({commit:t},e){t("setActualProperty",e)},SEND_DATA_TO_API(t,e){t.state.testId<0&&console.log(e)},setStepNumber(t,e){if(t.state.stepNumber!==e)return t.commit("setStepNumber",e),t.commit("setActualProperty",e),t.dispatch("setActualView",t.state.gameData[e].body)},setActualView(t,e){t.commit("setActualView",e)},setActualProperty(t,e){t.commit("setActualProperty",e)},nextStep(t){if(t.state.stepNumber+1<t.state.gameData.length)return t.dispatch("setStepNumber",t.state.stepNumber+1)},previousStep(t){if(t.state.stepNumber>0)return t.dispatch("setStepNumber",t.state.stepNumber-1)},returnActualView(t){return t.dispatch("setActualView",t.state.gameData[t.state.stepNumber].body)},setCurrentAnswer(t,e){t.commit("setCurrentAnswer",e)},changeAnswerCheckbox(t,e){t.commit("changeAnswerCheckbox",e)},setCompleted(t,e){t.commit("setCompleted",e)},setFeedbackItem(t,e){t.commit("setFeedbackItem",e)},setAcceptCheckbox(t,e){t.commit("setAcceptCheckbox",e)},setViewedSection(t,e){if(!t.state.actualProperty.viewedSections[e])return t.commit("setViewedSection",e),t.dispatch("increaseIndicator",1)},increaseIndicator(t,e){t.commit("increaseIndicator",e)},newStart(t){return t.commit("clearState"),t.dispatch("GET_DATA_FROM_API",t.state.testId)},setWindowHeight(t,e){t.commit("setWindowHeight",e)}},modules:{}});var os=s(4720),us=s.n(os);n["default"].config.productionTip=!1,n["default"].use(us()),new n["default"]({store:rs,render:t=>t(is)}).$mount("#app")},990:function(t,e,s){var n={"./acceptCheckMark.svg":8810,"./answerCheckMark.svg":3808,"./bg.jpg":8496,"./bg_office.jpg":5827,"./bg_office_small.jpg":5617,"./cup.svg":3129,"./ex_1.svg":887,"./ex_2.svg":2915,"./ex_3.svg":7922,"./ex_4.svg":3825,"./game1/sec1_1_1.jpg":9162,"./game1/sec1_1_2.jpg":4554,"./game1/sec1_4_1.jpg":6463,"./game1/sec1_4_2.jpg":5780,"./game1/sec1_4_3.jpg":584,"./game1/sec1_4_4.jpg":1214,"./game1/sec2_2_1.jpg":8088,"./game1/sec2_3_1.jpg":2677,"./game1/sec2_3_2.jpg":9691,"./game2/analysis1.png":8672,"./game2/sec1_3_1.png":93,"./game2/sec1_4_1.png":9640,"./game2/sec2_3_1.png":7752,"./star.svg":3111,"./star_full.svg":3632,"./ts_1.svg":3641,"./ts_2.svg":5750,"./ts_3.svg":9160,"./ts_4.svg":4858};function c(t){var e=i(t);return s(e)}function i(t){if(!s.o(n,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return n[t]}c.keys=function(){return Object.keys(n)},c.resolve=i,t.exports=c,c.id=990},8810:function(t,e,s){"use strict";t.exports=s.p+"img/acceptCheckMark.af6e9cdf.svg"},3808:function(t,e,s){"use strict";t.exports=s.p+"img/answerCheckMark.f10c7259.svg"},3129:function(t,e,s){"use strict";t.exports=s.p+"img/cup.3fb72a9f.svg"},887:function(t,e,s){"use strict";t.exports=s.p+"img/ex_1.09233b7a.svg"},2915:function(t,e,s){"use strict";t.exports=s.p+"img/ex_2.ac2f05a0.svg"},7922:function(t,e,s){"use strict";t.exports=s.p+"img/ex_3.ee4ee2cd.svg"},3825:function(t,e,s){"use strict";t.exports=s.p+"img/ex_4.a46160b4.svg"},3111:function(t,e,s){"use strict";t.exports=s.p+"img/star.6129ecef.svg"},3632:function(t,e,s){"use strict";t.exports=s.p+"img/star_full.8e6f570f.svg"},3641:function(t,e,s){"use strict";t.exports=s.p+"img/ts_1.0339b410.svg"},5750:function(t,e,s){"use strict";t.exports=s.p+"img/ts_2.e854429f.svg"},9160:function(t,e,s){"use strict";t.exports=s.p+"img/ts_3.69a32804.svg"},4858:function(t,e,s){"use strict";t.exports=s.p+"img/ts_4.1bed57e6.svg"},8496:function(t,e,s){"use strict";t.exports=s.p+"img/bg.38878460.jpg"},5827:function(t,e,s){"use strict";t.exports=s.p+"img/bg_office.8f6113ea.jpg"},5617:function(t,e,s){"use strict";t.exports=s.p+"img/bg_office_small.b0057d37.jpg"},9162:function(t,e,s){"use strict";t.exports=s.p+"img/sec1_1_1.2c45f01c.jpg"},4554:function(t,e,s){"use strict";t.exports=s.p+"img/sec1_1_2.05ce433a.jpg"},6463:function(t,e,s){"use strict";t.exports=s.p+"img/sec1_4_1.1ee2cc19.jpg"},5780:function(t,e,s){"use strict";t.exports=s.p+"img/sec1_4_2.9218f416.jpg"},584:function(t,e,s){"use strict";t.exports=s.p+"img/sec1_4_3.80ae0f92.jpg"},1214:function(t,e,s){"use strict";t.exports=s.p+"img/sec1_4_4.13ec2b6b.jpg"},8088:function(t,e,s){"use strict";t.exports=s.p+"img/sec2_2_1.c9f9d9ca.jpg"},2677:function(t,e,s){"use strict";t.exports=s.p+"img/sec2_3_1.5e627c67.jpg"},9691:function(t,e,s){"use strict";t.exports=s.p+"img/sec2_3_2.516dc869.jpg"},8672:function(t,e,s){"use strict";t.exports=s.p+"img/analysis1.60cd75b5.png"},93:function(t,e,s){"use strict";t.exports=s.p+"img/sec1_3_1.36ab2351.png"},9640:function(t,e,s){"use strict";t.exports=s.p+"img/sec1_4_1.3e2c656c.png"},7752:function(t,e,s){"use strict";t.exports=s.p+"img/sec2_3_1.92340568.png"}},e={};function s(n){var c=e[n];if(void 0!==c)return c.exports;var i=e[n]={exports:{}};return t[n](i,i.exports,s),i.exports}s.m=t,function(){var t=[];s.O=function(e,n,c,i){if(!n){var a=1/0;for(l=0;l<t.length;l++){n=t[l][0],c=t[l][1],i=t[l][2];for(var r=!0,o=0;o<n.length;o++)(!1&i||a>=i)&&Object.keys(s.O).every((function(t){return s.O[t](n[o])}))?n.splice(o--,1):(r=!1,i<a&&(a=i));if(r){t.splice(l--,1);var u=c();void 0!==u&&(e=u)}}return e}i=i||0;for(var l=t.length;l>0&&t[l-1][2]>i;l--)t[l]=t[l-1];t[l]=[n,c,i]}}(),function(){s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,{a:e}),e}}(),function(){s.d=function(t,e){for(var n in e)s.o(e,n)&&!s.o(t,n)&&Object.defineProperty(t,n,{enumerable:!0,get:e[n]})}}(),function(){s.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})}}(),function(){s.p=""}(),function(){var t={143:0};s.O.j=function(e){return 0===t[e]};var e=function(e,n){var c,i,a=n[0],r=n[1],o=n[2],u=0;if(a.some((function(e){return 0!==t[e]}))){for(c in r)s.o(r,c)&&(s.m[c]=r[c]);if(o)var l=o(s)}for(e&&e(n);u<a.length;u++)i=a[u],s.o(t,i)&&t[i]&&t[i][0](),t[i]=0;return s.O(l)},n=self["webpackChunkmedtest6"]=self["webpackChunkmedtest6"]||[];n.forEach(e.bind(null,0)),n.push=e.bind(null,n.push.bind(n))}();var n=s.O(void 0,[998],(function(){return s(5921)}));n=s.O(n)})();
//# sourceMappingURL=app.ba2de1f2.js.map