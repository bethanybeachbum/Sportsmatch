
// Copyright 2012 Google Inc. All rights reserved.
(function(w,g){w[g]=w[g]||{};w[g].e=function(s){return eval(s);};})(window,'google_tag_manager');(function(){

var data = {
"resource": {
  "version":"286",
  "macros":[{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return jQuery(\"body\").attr(\"data-clp-course-id\")})();"]
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"order.amount"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=",["escape",["macro",1],8,16],";return parseFloat(a\/100).toFixed(2)})();"]
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"purchase.amount"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=",["escape",["macro",3],8,16],";return a\/100})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){if(0\u003CjQuery('div[data-purpose\\x3d\"introduction-video\"]').length)return jQuery('a[data-purpose\\x3d\"take-this-course-button\"').attr(\"data-signuppopupidentifier\")})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){if(0\u003CjQuery(\"div.hidden-course-bar.slideDown\").length)return\"scrolled\"})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){if(0\u003CjQuery('div[data-purpose\\x3d\"introduction-video\"]').length)return jQuery(\".current-price\").length})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){if(0\u003CjQuery('div[data-purpose\\x3d\"introduction-video\"]').length)return jQuery(\".current-price\").text().replace(\"$\",\"\").trim()})();"]
    },{
      "function":"__j",
      "vtp_name":"UD.request.locale"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return\"ja_JP\"==",["escape",["macro",9],8,16],"||\"ja-JP\"==",["escape",["macro",9],8,16],"||\"jp-JP\"==",["escape",["macro",9],8,16],"||\"jp_JP\"==",["escape",["macro",9],8,16],"})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return\"en_US\"==",["escape",["macro",9],8,16],"||\"en-US\"==",["escape",["macro",9],8,16],"})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return jQuery(\"body\").attr(\"data-course-labels-experiment-hotjar\")})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return jQuery(\"body\").attr(\"data-hotjar-channel-type\")})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){channelType=jQuery(\"body\").attr(\"data-hotjar-channel-type\");hotjarPage=jQuery(\"body\").attr(\"data-hotjar-page\");return\"featured\"===channelType||\"logged-in-homepage\"===hotjarPage})();"]
    },{
      "function":"__u",
      "vtp_component":"URL"
    },{
      "function":"__u",
      "vtp_component":"PATH"
    },{
      "function":"__j",
      "vtp_name":"UD.me.id"
    },{
      "function":"__e"
    },{
      "function":"__u"
    },{
      "function":"__r"
    },{
      "function":"__c",
      "vtp_value":"UA-12366301-1"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"analyticsAccount"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"adwordsAccount.appId"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"adwordsAccount.successLabel"
    },{
      "function":"__aev",
      "vtp_varType":"URL",
      "vtp_component":"URL"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":true,
      "vtp_defaultValue":"video-player-no-purpose",
      "vtp_name":"gtm.element.dataset.purpose"
    },{
      "function":"__v",
      "vtp_name":"gtm.triggers",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":true,
      "vtp_defaultValue":""
    },{
      "function":"__aev",
      "vtp_varType":"ID"
    },{
      "function":"__aev",
      "vtp_varType":"CLASSES"
    },{
      "function":"__u",
      "vtp_component":"HOST"
    },{
      "function":"__j",
      "vtp_name":"UD.visiting.visitor.id"
    },{
      "function":"__v",
      "vtp_name":"isMember",
      "vtp_dataLayerVersion":2
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"purchase.buyableId"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"order.id"
    },{
      "function":"__e"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"purchase.isMarketingBoostAgreed"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"purchase.affiliateType"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"purchase.purchaseId"
    },{
      "function":"__j",
      "vtp_name":"UD.me.impact_radius_id"
    },{
      "function":"__j",
      "vtp_name":"UD.me.impact_radius_email"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"purchase.code"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"purchase.purchaseAmount"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"purchase.category"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"purchase.purchaseSku"
    },{
      "function":"__f"
    },{
      "function":"__r"
    },{
      "function":"__d",
      "vtp_selectorType":"ID",
      "vtp_elementId":"tag-manager-courseId"
    },{
      "function":"__c",
      "vtp_value":"Course"
    },{
      "function":"__c",
      "vtp_value":"Topic"
    },{
      "function":"__v",
      "vtp_name":"eventCategory",
      "vtp_dataLayerVersion":2
    },{
      "function":"__v",
      "vtp_name":"eventAction",
      "vtp_dataLayerVersion":2
    },{
      "function":"__v",
      "vtp_name":"nonInteraction",
      "vtp_dataLayerVersion":2
    },{
      "function":"__aev",
      "vtp_varType":"ELEMENT"
    },{
      "function":"__aev",
      "vtp_varType":"TEXT"
    },{
      "function":"__v",
      "vtp_name":"eventLabel",
      "vtp_defaultValue":"undefined",
      "vtp_setDefaultValue":true,
      "vtp_dataLayerVersion":2
    },{
      "function":"__v",
      "vtp_name":"eventValue",
      "vtp_defaultValue":"undefined",
      "vtp_setDefaultValue":true,
      "vtp_dataLayerVersion":2
    },{
      "function":"__v",
      "vtp_name":"eventNoninteraction",
      "vtp_defaultValue":"False",
      "vtp_setDefaultValue":true,
      "vtp_dataLayerVersion":2
    },{
      "function":"__v",
      "vtp_name":"isMember",
      "vtp_dataLayerVersion":2
    },{
      "function":"__v",
      "vtp_name":"experiment",
      "vtp_dataLayerVersion":2
    },{
      "function":"__smm",
      "vtp_setDefaultValue":true,
      "vtp_input":["macro",17],
      "vtp_defaultValue":"Included",
      "vtp_map":["list",["map","key","12392710","value","1"]]
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"env"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"purchase.buyableTitle"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"order.currency"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"order.isLinkshare"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"adwordsAccount"
    },{
      "function":"__c",
      "vtp_value":"aw"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"name"
    },{
      "function":"__j",
      "vtp_name":"window.scrollY"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"gtm.start"
    },{
      "function":"__c",
      "vtp_value":"UA-12366301-47"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"order.affiliateType"
    }],
  "tags":[{
      "function":"__html",
      "priority":2,
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/javascript\"\u003Ewindow._tfa=window._tfa||[];_tfa.push({notify:\"mark\",type:\"Retargeting\"});\u003C\/script\u003E\n\n\u003Cscript src=\"\/\/cdn.taboola.com\/libtrc\/udemy\/tfa.js\"\u003E\u003C\/script\u003E",
      "vtp_supportDocumentWrite":true,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "vtp_usePostscribe":true,
      "tag_id":125
    },{
      "function":"__html",
      "priority":1,
      "once_per_event":true,
      "vtp_html":"\u003Cscript\u003E!function(b,e,f,g,a,c,d){b.fbq||(a=b.fbq=function(){a.callMethod?a.callMethod.apply(a,arguments):a.queue.push(arguments)},b._fbq||(b._fbq=a),a.push=a,a.loaded=!0,a.version=\"2.0\",a.queue=[],c=e.createElement(f),c.async=!0,c.src=g,d=e.getElementsByTagName(f)[0],d.parentNode.insertBefore(c,d))}(window,document,\"script\",\"\/\/connect.facebook.net\/en_US\/fbevents.js\");fbq(\"init\",\"1457291081167286\");fbq(\"track\",\"PageView\");\u003C\/script\u003E",
      "vtp_supportDocumentWrite":true,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "vtp_usePostscribe":true,
      "tag_id":13
    },{
      "function":"__cl",
      "tag_id":28
    },{
      "function":"__lcl",
      "vtp_waitForTagsTimeout":"2000",
      "vtp_waitForTags":true,
      "vtp_checkValidation":true,
      "tag_id":29
    },{
      "function":"__paused",
      "vtp_originalTagType":"html",
      "tag_id":33
    },{
      "function":"__paused",
      "vtp_originalTagType":"html",
      "tag_id":34
    },{
      "function":"__awct",
      "once_per_event":true,
      "vtp_conversionValue":"1",
      "vtp_conversionId":"973941651",
      "vtp_conversionLabel":"PKv-COL4z1wQk9e00AM",
      "vtp_url":["macro",19],
      "vtp_enableReadGaCookie":false,
      "tag_id":38
    },{
      "function":"__paused",
      "vtp_originalTagType":"html",
      "tag_id":46
    },{
      "function":"__paused",
      "vtp_originalTagType":"html",
      "tag_id":49
    },{
      "function":"__sp",
      "once_per_event":true,
      "vtp_conversionId":"951369813",
      "vtp_customParamsFormat":"NONE",
      "vtp_url":["macro",19],
      "tag_id":62
    },{
      "function":"__awct",
      "once_per_event":true,
      "vtp_conversionId":"966888136",
      "vtp_conversionLabel":"TQxQCNq4hV0QyJWGzQM",
      "vtp_url":["macro",19],
      "vtp_enableReadGaCookie":false,
      "tag_id":65
    },{
      "function":"__awct",
      "once_per_event":true,
      "vtp_conversionId":"951369813",
      "vtp_conversionLabel":"5dghCNW2hV0Q1YDTxQM",
      "vtp_url":["macro",19],
      "vtp_enableReadGaCookie":false,
      "tag_id":66
    },{
      "function":"__img",
      "once_per_event":true,
      "vtp_useCacheBuster":false,
      "vtp_url":"https:\/\/5079.xg4ken.com\/media\/redir.php?track=1\u0026token=a1ed898d-f7f9-4815-ba08-19fe053ee591\u0026type=conv\u0026val=0.0\u0026orderId=\u0026promoCode=\u0026valueCurrency=USD\u0026GCID=\u0026kw=\u0026product=",
      "tag_id":78
    },{
      "function":"__img",
      "once_per_event":true,
      "vtp_useCacheBuster":true,
      "vtp_cacheBusterQueryParam":"gtmcb",
      "vtp_url":"https:\/\/5079.xg4ken.com\/media\/redir.php?track=1\u0026token=6af875c0-59a1-49cd-9618-5df0d111948d\u0026type=conv\u0026val=0.0\u0026orderId=\u0026promoCode=\u0026valueCurrency=USD\u0026GCID=\u0026kw=\u0026product=",
      "vtp_randomNumber":["macro",20],
      "tag_id":79
    },{
      "function":"__ua",
      "once_per_load":true,
      "vtp_nonInteraction":true,
      "vtp_doubleClick":true,
      "vtp_setTrackerName":false,
      "vtp_useDebugVersion":false,
      "vtp_eventCategory":"userID",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_enableLinkId":false,
      "vtp_eventAction":"excluded",
      "vtp_dimension":["list",["map","index","16","dimension",["macro",17]]],
      "vtp_enableEcommerce":false,
      "vtp_trackingId":["macro",21],
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":80
    },{
      "function":"__img",
      "once_per_event":true,
      "vtp_useCacheBuster":false,
      "vtp_url":"https:\/\/ct.pinterest.com\/?tid=fGjngNzQ7mk",
      "tag_id":82
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_doubleClick":true,
      "vtp_setTrackerName":false,
      "vtp_useDebugVersion":false,
      "vtp_useHashAutoLink":false,
      "vtp_trackType":"TRACK_PAGEVIEW",
      "vtp_decorateFormsAutoLink":false,
      "vtp_enableLinkId":false,
      "vtp_enableEcommerce":false,
      "vtp_trackingId":"UA-12366301-29",
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "tag_id":86
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_doubleClick":true,
      "vtp_setTrackerName":false,
      "vtp_useDebugVersion":false,
      "vtp_useHashAutoLink":false,
      "vtp_trackType":"TRACK_PAGEVIEW",
      "vtp_decorateFormsAutoLink":false,
      "vtp_enableLinkId":false,
      "vtp_enableEcommerce":false,
      "vtp_trackingId":["macro",22],
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "tag_id":88
    },{
      "function":"__awct",
      "once_per_event":true,
      "vtp_conversionValue":"1",
      "vtp_conversionId":["macro",23],
      "vtp_conversionLabel":["macro",24],
      "vtp_url":["macro",19],
      "vtp_enableReadGaCookie":false,
      "tag_id":90
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_doubleClick":true,
      "vtp_setTrackerName":false,
      "vtp_useDebugVersion":false,
      "vtp_fieldsToSet":["list",["map","fieldName","page","value","\/join\/login-popup\/"]],
      "vtp_useHashAutoLink":false,
      "vtp_trackType":"TRACK_PAGEVIEW",
      "vtp_decorateFormsAutoLink":false,
      "vtp_enableLinkId":false,
      "vtp_enableEcommerce":false,
      "vtp_trackingId":["macro",21],
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "tag_id":94
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_doubleClick":true,
      "vtp_setTrackerName":false,
      "vtp_useDebugVersion":false,
      "vtp_fieldsToSet":["list",["map","fieldName","page","value","\/payment\/checkout\/"]],
      "vtp_useHashAutoLink":false,
      "vtp_trackType":"TRACK_PAGEVIEW",
      "vtp_decorateFormsAutoLink":false,
      "vtp_enableLinkId":false,
      "vtp_enableEcommerce":false,
      "vtp_trackingId":"UA-12366301-46",
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "tag_id":95
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":true,
      "vtp_doubleClick":true,
      "vtp_setTrackerName":false,
      "vtp_useDebugVersion":false,
      "vtp_eventCategory":"seotest",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_enableLinkId":false,
      "vtp_eventAction":"seotest",
      "vtp_dimension":["list",["map","index","19","dimension","show price"]],
      "vtp_enableEcommerce":false,
      "vtp_trackingId":["macro",21],
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":121
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":true,
      "vtp_doubleClick":true,
      "vtp_setTrackerName":false,
      "vtp_useDebugVersion":false,
      "vtp_eventCategory":"courseview",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_enableLinkId":false,
      "vtp_eventAction":["macro",0],
      "vtp_dimension":["list",["map","index","5","dimension",["macro",0]],["map","index","6","dimension","offerdetail"],["map","index","8","dimension",["macro",8]]],
      "vtp_enableEcommerce":false,
      "vtp_trackingId":["macro",21],
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":122
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_doubleClick":true,
      "vtp_setTrackerName":false,
      "vtp_useDebugVersion":false,
      "vtp_eventCategory":"send",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_enableLinkId":false,
      "vtp_eventAction":"15_seconds",
      "vtp_eventLabel":"read",
      "vtp_enableEcommerce":false,
      "vtp_trackingId":["macro",21],
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":123
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_doubleClick":true,
      "vtp_setTrackerName":false,
      "vtp_useDebugVersion":false,
      "vtp_eventCategory":"signup",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_enableLinkId":false,
      "vtp_eventAction":"click",
      "vtp_enableEcommerce":false,
      "vtp_trackingId":["macro",21],
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":132
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_doubleClick":true,
      "vtp_setTrackerName":false,
      "vtp_useDebugVersion":false,
      "vtp_eventValue":["macro",2],
      "vtp_eventCategory":"purchase",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_enableLinkId":false,
      "vtp_eventAction":"course",
      "vtp_enableEcommerce":false,
      "vtp_trackingId":["macro",21],
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":133
    },{
      "function":"__sp",
      "once_per_event":true,
      "vtp_conversionId":"880479204",
      "vtp_customParamsFormat":"NONE",
      "vtp_url":["macro",19],
      "tag_id":134
    },{
      "function":"__awct",
      "once_per_event":true,
      "vtp_conversionValue":"1",
      "vtp_conversionId":"880479204",
      "vtp_conversionLabel":"9fRMCPq2oWcQ5JfsowM",
      "vtp_url":["macro",19],
      "vtp_enableReadGaCookie":false,
      "tag_id":136
    },{
      "function":"__paused",
      "vtp_originalTagType":"html",
      "tag_id":141
    },{
      "function":"__paused",
      "vtp_originalTagType":"html",
      "tag_id":142
    },{
      "function":"__awct",
      "once_per_event":true,
      "vtp_conversionId":"877552150",
      "vtp_conversionLabel":"80LmCOWbwGgQlsS5ogM",
      "vtp_url":["macro",19],
      "vtp_enableReadGaCookie":false,
      "tag_id":143
    },{
      "function":"__img",
      "once_per_event":true,
      "vtp_useCacheBuster":false,
      "vtp_url":"https:\/\/www.quora.com\/_\/ad\/f3d99eb602d5430b8ecc99610afe3ded\/pixel",
      "tag_id":145
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_doubleClick":false,
      "vtp_setTrackerName":true,
      "vtp_useDebugVersion":false,
      "vtp_fieldsToSet":["list",["map","fieldName","allowLinker","value","True"],["map","fieldName","cookieDomain","value","auto"]],
      "vtp_trackerName":"ufbonly",
      "vtp_useHashAutoLink":false,
      "vtp_trackType":"TRACK_PAGEVIEW",
      "vtp_autoLinkDomains":"business.udemy.com",
      "vtp_decorateFormsAutoLink":true,
      "vtp_enableLinkId":false,
      "vtp_enableEcommerce":false,
      "vtp_trackingId":"UA-12366301-47",
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "tag_id":146
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_doubleClick":false,
      "vtp_setTrackerName":false,
      "vtp_useDebugVersion":false,
      "vtp_eventCategory":"test video",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_enableLinkId":false,
      "vtp_eventAction":"submission",
      "vtp_enableEcommerce":false,
      "vtp_trackingId":"UA-12366301-1",
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":154
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_doubleClick":false,
      "vtp_setTrackerName":false,
      "vtp_useDebugVersion":false,
      "vtp_eventCategory":"createcourse",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_enableLinkId":false,
      "vtp_eventAction":"click",
      "vtp_enableEcommerce":false,
      "vtp_trackingId":["macro",21],
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":155
    },{
      "function":"__paused",
      "vtp_originalTagType":"html",
      "tag_id":158
    },{
      "function":"__paused",
      "vtp_originalTagType":"html",
      "tag_id":159
    },{
      "function":"__awct",
      "once_per_event":true,
      "vtp_conversionId":"880479204",
      "vtp_conversionLabel":"9fRMCPq2oWcQ5JfsowM",
      "vtp_url":["macro",19],
      "vtp_enableReadGaCookie":false,
      "tag_id":160
    },{
      "function":"__sp",
      "once_per_event":true,
      "vtp_conversionId":"880479204",
      "vtp_customParamsFormat":"NONE",
      "vtp_url":["macro",19],
      "tag_id":161
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_doubleClick":false,
      "vtp_setTrackerName":false,
      "vtp_useDebugVersion":false,
      "vtp_eventCategory":"linkshare",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_enableLinkId":false,
      "vtp_eventAction":"signup",
      "vtp_eventLabel":"click",
      "vtp_enableEcommerce":false,
      "vtp_trackingId":"UA-12366301-1",
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":163
    },{
      "function":"__awct",
      "once_per_event":true,
      "vtp_conversionId":"852928941",
      "vtp_conversionLabel":"CzYTCLjiy3MQrdPalgM",
      "vtp_url":["macro",19],
      "vtp_enableReadGaCookie":false,
      "tag_id":173
    },{
      "function":"__paused",
      "vtp_originalTagType":"html",
      "tag_id":178
    },{
      "function":"__paused",
      "vtp_originalTagType":"html",
      "tag_id":179
    },{
      "function":"__awct",
      "once_per_event":true,
      "vtp_enableConversionLinker":true,
      "vtp_conversionValue":["macro",2],
      "vtp_conversionCookiePrefix":"_gcl",
      "vtp_conversionId":"877556973",
      "vtp_conversionLabel":"j88uCJmGiXkQ7em5ogM",
      "vtp_url":["macro",19],
      "vtp_enableReadGaCookie":false,
      "tag_id":181
    },{
      "function":"__paused",
      "vtp_originalTagType":"html",
      "tag_id":186
    },{
      "function":"__cl",
      "tag_id":195
    },{
      "function":"__cl",
      "tag_id":196
    },{
      "function":"__cl",
      "tag_id":197
    },{
      "function":"__cl",
      "tag_id":198
    },{
      "function":"__cl",
      "tag_id":199
    },{
      "function":"__tl",
      "vtp_eventName":"gtm.timer",
      "vtp_interval":"10000",
      "vtp_limit":"1",
      "vtp_uniqueTriggerId":"164179_107",
      "tag_id":200
    },{
      "function":"__tl",
      "vtp_eventName":"gtm.timer",
      "vtp_interval":"10000",
      "vtp_limit":"1",
      "vtp_uniqueTriggerId":"164179_108",
      "tag_id":201
    },{
      "function":"__tl",
      "vtp_eventName":"gtm.timer",
      "vtp_interval":"20000",
      "vtp_limit":"1",
      "vtp_uniqueTriggerId":"164179_109",
      "tag_id":202
    },{
      "function":"__tl",
      "vtp_eventName":"gtm.timer",
      "vtp_interval":"20000",
      "vtp_limit":"1",
      "vtp_uniqueTriggerId":"164179_110",
      "tag_id":203
    },{
      "function":"__tl",
      "vtp_eventName":"gtm.timer",
      "vtp_interval":"30000",
      "vtp_limit":"1",
      "vtp_uniqueTriggerId":"164179_111",
      "tag_id":204
    },{
      "function":"__tl",
      "vtp_eventName":"gtm.timer",
      "vtp_interval":"30000",
      "vtp_limit":"1",
      "vtp_uniqueTriggerId":"164179_112",
      "tag_id":205
    },{
      "function":"__tl",
      "vtp_eventName":"gtm.timer",
      "vtp_interval":"40000",
      "vtp_limit":"1",
      "vtp_uniqueTriggerId":"164179_113",
      "tag_id":206
    },{
      "function":"__tl",
      "vtp_eventName":"gtm.timer",
      "vtp_interval":"40000",
      "vtp_limit":"1",
      "vtp_uniqueTriggerId":"164179_114",
      "tag_id":207
    },{
      "function":"__tl",
      "vtp_eventName":"gtm.timer",
      "vtp_interval":"50000",
      "vtp_limit":"1",
      "vtp_uniqueTriggerId":"164179_115",
      "tag_id":208
    },{
      "function":"__tl",
      "vtp_eventName":"gtm.timer",
      "vtp_interval":"50000",
      "vtp_limit":"1",
      "vtp_uniqueTriggerId":"164179_116",
      "tag_id":209
    },{
      "function":"__tl",
      "vtp_eventName":"gtm.timer",
      "vtp_interval":"60000",
      "vtp_limit":"1",
      "vtp_uniqueTriggerId":"164179_117",
      "tag_id":210
    },{
      "function":"__tl",
      "vtp_eventName":"gtm.timer",
      "vtp_interval":"60000",
      "vtp_limit":"1",
      "vtp_uniqueTriggerId":"164179_118",
      "tag_id":211
    },{
      "function":"__tl",
      "vtp_eventName":"gtm.timer",
      "vtp_interval":"70000",
      "vtp_limit":"1",
      "vtp_uniqueTriggerId":"164179_119",
      "tag_id":212
    },{
      "function":"__tl",
      "vtp_eventName":"gtm.timer",
      "vtp_interval":"80000",
      "vtp_limit":"1",
      "vtp_uniqueTriggerId":"164179_120",
      "tag_id":213
    },{
      "function":"__tl",
      "vtp_eventName":"gtm.timer",
      "vtp_interval":"80000",
      "vtp_limit":"1",
      "vtp_uniqueTriggerId":"164179_121",
      "tag_id":214
    },{
      "function":"__tl",
      "vtp_eventName":"gtm.timer",
      "vtp_interval":"90000",
      "vtp_limit":"1",
      "vtp_uniqueTriggerId":"164179_122",
      "tag_id":215
    },{
      "function":"__tl",
      "vtp_eventName":"gtm.timer",
      "vtp_interval":"90000",
      "vtp_limit":"1",
      "vtp_uniqueTriggerId":"164179_123",
      "tag_id":216
    },{
      "function":"__tl",
      "vtp_eventName":"gtm.timer",
      "vtp_interval":"110000",
      "vtp_limit":"1",
      "vtp_uniqueTriggerId":"164179_124",
      "tag_id":217
    },{
      "function":"__tl",
      "vtp_eventName":"gtm.timer",
      "vtp_interval":"100000",
      "vtp_limit":"1",
      "vtp_uniqueTriggerId":"164179_125",
      "tag_id":218
    },{
      "function":"__tl",
      "vtp_eventName":"gtm.timer",
      "vtp_interval":"110000",
      "vtp_limit":"1",
      "vtp_uniqueTriggerId":"164179_126",
      "tag_id":219
    },{
      "function":"__tl",
      "vtp_eventName":"gtm.timer",
      "vtp_interval":"120000",
      "vtp_limit":"1",
      "vtp_uniqueTriggerId":"164179_127",
      "tag_id":220
    },{
      "function":"__tl",
      "vtp_eventName":"gtm.timer",
      "vtp_interval":"120000",
      "vtp_limit":"1",
      "vtp_uniqueTriggerId":"164179_128",
      "tag_id":221
    },{
      "function":"__tl",
      "vtp_eventName":"gtm.timer",
      "vtp_interval":"70000",
      "vtp_limit":"1",
      "vtp_uniqueTriggerId":"164179_129",
      "tag_id":222
    },{
      "function":"__cl",
      "tag_id":223
    },{
      "function":"__cl",
      "tag_id":224
    },{
      "function":"__cl",
      "tag_id":225
    },{
      "function":"__cl",
      "tag_id":226
    },{
      "function":"__cl",
      "tag_id":227
    },{
      "function":"__cl",
      "tag_id":228
    },{
      "function":"__cl",
      "tag_id":229
    },{
      "function":"__tl",
      "vtp_eventName":"gtm.timer",
      "vtp_interval":"15000",
      "vtp_limit":"1",
      "vtp_uniqueTriggerId":"164179_139",
      "tag_id":230
    },{
      "function":"__cl",
      "tag_id":231
    },{
      "function":"__cl",
      "tag_id":232
    },{
      "function":"__cl",
      "tag_id":233
    },{
      "function":"__html",
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003Evar fb_param={pixel_id:\"6009170267856\",value:\"0.00\",currency:\"USD\"};(function(){var a=document.createElement(\"script\");a.async=!0;a.src=\"\/\/connect.facebook.net\/en_US\/fp.js\";var b=document.getElementsByTagName(\"script\")[0];b.parentNode.insertBefore(a,b)})();\u003C\/script\u003E\n\u003Cnoscript\u003E\u003Cimg height=\"1\" width=\"1\" alt=\"\" style=\"display:none\" src=\"https:\/\/www.facebook.com\/offsite_event.php?id=6009170267856\u0026amp;value=0\u0026amp;currency=USD\"\u003E\u003C\/noscript\u003E",
      "vtp_convertJsValuesToExpressions":true,
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":3
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript\u003E(function(){var b=window._fbq||(window._fbq=[]);if(!b.loaded){var a=document.createElement(\"script\");a.async=!0;a.src=\"\/\/connect.facebook.net\/en_US\/fbds.js\";var c=document.getElementsByTagName(\"script\")[0];c.parentNode.insertBefore(a,c);b.loaded=!0}})();window._fbq=window._fbq||[];_fbq.push([\"track\",\"6009170268656\",{value:",["escape",["macro",2],8,16],",currency:\"USD\"}]);_fbq.push([\"track\",\"6016501834270\",{value:",["escape",["macro",2],8,16],",currency:\"USD\"}]);\u003C\/script\u003E\n\u003Cnoscript\u003E\u003Cimg height=\"1\" width=\"1\" alt=\"\" style=\"display:none\" src=\"https:\/\/www.facebook.com\/tr?ev=6009170268656\u0026amp;cd[value]=0.00\u0026amp;cd[currency]=USD\u0026amp;noscript=1\"\u003E\u003Cimg height=\"1\" width=\"1\" alt=\"\" style=\"display:none\" src=\"https:\/\/www.facebook.com\/tr?ev=6016501834270\u0026amp;cd[value]=0.00\u0026amp;cd[currency]=USD\u0026amp;noscript=1\"\u003E\u003C\/noscript\u003E\n"],
      "vtp_supportDocumentWrite":true,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "vtp_usePostscribe":true,
      "tag_id":4
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":["template","\n\n\u003Cscript type=\"text\/gtmscript\"\u003Evar _kiq=_kiq||[];(function(){setTimeout(function(){var a=document,b=a.getElementsByTagName(\"script\")[0];a=a.createElement(\"script\");a.type=\"text\/javascript\";a.async=!0;a.src=\"\/\/s3.amazonaws.com\/ki.js\/34436\/6GL.js\";b.parentNode.insertBefore(a,b)},1)})();(function(){_kiq.push([\"identify\",",["escape",["macro",17],8,16],"||\"\"]);_kiq.push([\"set\",{user_id:",["escape",["macro",17],8,16],"||\"\",visitor_id:",["escape",["macro",31],8,16],"||\"\"}])})();\u003C\/script\u003E"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":11
    },{
      "function":"__html",
      "vtp_html":"\n\u003Cscript type=\"text\/gtmscript\"\u003Evar google_conversion_id=989116586,google_conversion_language=\"en\",google_conversion_format=\"2\",google_conversion_color=\"ffffff\",google_conversion_label=\"Ah9qCJbXgAgQqvHS1wM\",google_remarketing_only=!1;\u003C\/script\u003E\n\u003Cscript type=\"text\/gtmscript\" data-gtmsrc=\"\/\/www.googleadservices.com\/pagead\/conversion.js\"\u003E\u003C\/script\u003E\n\u003Cnoscript\u003E\n\u003Cdiv style=\"display:inline;\"\u003E\n\u003Cimg height=\"1\" width=\"1\" style=\"border-style:none;\" alt=\"\" src=\"\/\/www.googleadservices.com\/pagead\/conversion\/989116586\/?label=Ah9qCJbXgAgQqvHS1wM\u0026amp;guid=ON\u0026amp;script=0\"\u003E\n\u003C\/div\u003E\n\u003C\/noscript\u003E",
      "vtp_convertJsValuesToExpressions":true,
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":14
    },{
      "function":"__html",
      "vtp_html":"\n\u003Cscript type=\"text\/gtmscript\"\u003Evar fb_param={pixel_id:\"6016391666497\",value:\"0.00\",currency:\"USD\"};(function(){var a=document.createElement(\"script\");a.async=!0;a.src=\"\/\/connect.facebook.net\/en_US\/fp.js\";var b=document.getElementsByTagName(\"script\")[0];b.parentNode.insertBefore(a,b)})();\u003C\/script\u003E\n\u003Cnoscript\u003E\u003Cimg height=\"1\" width=\"1\" alt=\"\" style=\"display:none\" src=\"https:\/\/www.facebook.com\/offsite_event.php?id=6016391666497\u0026amp;value=0\u0026amp;currency=USD\"\u003E\u003C\/noscript\u003E",
      "vtp_convertJsValuesToExpressions":true,
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":15
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\n\u003Cscript type=\"text\/javascript\"\u003Evar google_conversion_id=966888136,google_conversion_language=\"en\",google_conversion_format=\"3\",google_conversion_color=\"ffffff\",google_conversion_label=\"SgynCKCv_VoQyJWGzQM\",google_remarketing_only=!1;\u003C\/script\u003E\n\u003Cscript type=\"text\/javascript\" src=\"\/\/www.googleadservices.com\/pagead\/conversion.js\"\u003E\u003C\/script\u003E",
      "vtp_supportDocumentWrite":true,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "vtp_usePostscribe":true,
      "tag_id":35
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\n\u003Cscript type=\"text\/javascript\"\u003Evar google_conversion_id=951369813,google_conversion_language=\"en\",google_conversion_format=\"3\",google_conversion_color=\"ffffff\",google_conversion_label=\"kUq1CNrK-1oQ1YDTxQM\",google_remarketing_only=!1;\u003C\/script\u003E\n\u003Cscript type=\"text\/javascript\" src=\"\/\/www.googleadservices.com\/pagead\/conversion.js\"\u003E\u003C\/script\u003E",
      "vtp_supportDocumentWrite":true,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "vtp_usePostscribe":true,
      "tag_id":36
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\n\u003Cscript\u003E(function(){var b=window._fbq||(window._fbq=[]);if(!b.loaded){var a=document.createElement(\"script\");a.async=!0;a.src=\"\/\/connect.facebook.net\/en_US\/fbds.js\";var c=document.getElementsByTagName(\"script\")[0];c.parentNode.insertBefore(a,c);b.loaded=!0}})();window._fbq=window._fbq||[];window._fbq.push([\"track\",\"6034528106080\",{value:\"0.00\",currency:\"JPY\"}]);\u003C\/script\u003E",
      "vtp_supportDocumentWrite":true,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "vtp_usePostscribe":true,
      "tag_id":37
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript\u003Evar $course_id=jQuery(\"body\").attr(\"data-clp-course-id\");if(void 0!==$course_id\u0026\u00260\u003C$course_id.length){var clp_course_id=jQuery(\"body\").attr(\"data-clp-course-id\");window._fbq=window._fbq||[];_fbq.push([\"track\",\"ViewContent\",{content_ids:clp_course_id,content_type:\"product\"}])};\u003C\/script\u003E",
      "vtp_supportDocumentWrite":true,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "vtp_usePostscribe":true,
      "tag_id":40
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript\u003EUD.GoogleAnalytics.setValue(\"dimension7\",\"true\");UD.GoogleAnalytics.trackEvent(\"ismember\",\"ismember\",\"ismember\",void 0,void 0,{nonInteraction:1});window._fbq=window._fbq||[];_fbq.push([\"track\",\"isMember\"]);\u003C\/script\u003E",
      "vtp_supportDocumentWrite":true,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "vtp_usePostscribe":true,
      "tag_id":42
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003E(function(){var a=window._fbq||(window._fbq=[]);if(!a.loaded){var b=document.createElement(\"script\");b.async=!0;b.src=\"\/\/connect.facebook.net\/en_US\/fbds.js\";var c=document.getElementsByTagName(\"script\")[0];c.parentNode.insertBefore(b,c);a.loaded=!0}a.push([\"addPixelId\",\"101425363524479\"])})();window._fbq=window._fbq||[];window._fbq.push([\"track\",\"PixelInitialized\",{}]);\u003C\/script\u003E",
      "vtp_convertJsValuesToExpressions":true,
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":44
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003Evar google_conversion_id=951369813,google_custom_params=window.google_tag_params,google_remarketing_only=!0;\u003C\/script\u003E\n\u003Cscript type=\"text\/gtmscript\" data-gtmsrc=\"\/\/www.googleadservices.com\/pagead\/conversion.js\"\u003E\u003C\/script\u003E",
      "vtp_convertJsValuesToExpressions":true,
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":45
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript\u003E(function(){var a=window._fbq||(window._fbq=[]);if(!a.loaded){var b=document.createElement(\"script\");b.async=!0;b.src=\"\/\/connect.facebook.net\/en_US\/fbds.js\";var c=document.getElementsByTagName(\"script\")[0];c.parentNode.insertBefore(b,c);a.loaded=!0}a.push([\"addPixelId\",\"101425363524479\"])})();window._fbq=window._fbq||[];window._fbq.push([\"track\",\"PixelInitialized\",{}]);\u003C\/script\u003E",
      "vtp_supportDocumentWrite":true,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "vtp_usePostscribe":true,
      "tag_id":47
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/javascript\"\u003Evar google_conversion_id=951369813,google_custom_params=window.google_tag_params,google_remarketing_only=!0;\u003C\/script\u003E\n\u003Cscript type=\"text\/javascript\" src=\"\/\/www.googleadservices.com\/pagead\/conversion.js\"\u003E\u003C\/script\u003E",
      "vtp_supportDocumentWrite":true,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "vtp_usePostscribe":true,
      "tag_id":48
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript\u003E0\u003C$(\".signup-link\").length\u0026\u0026$(\".signup-link\").trigger(\"click\");\u003C\/script\u003E",
      "vtp_convertJsValuesToExpressions":true,
      "vtp_supportDocumentWrite":true,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "vtp_usePostscribe":true,
      "tag_id":51
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript\u003E(function(){var a=window._fbq||(window._fbq=[]);if(!a.loaded){var b=document.createElement(\"script\");b.async=!0;b.src=\"\/\/connect.facebook.net\/en_US\/fbds.js\";var c=document.getElementsByTagName(\"script\")[0];c.parentNode.insertBefore(b,c);a.loaded=!0}a.push([\"addPixelId\",\"101425363524479\"])})();window._fbq=window._fbq||[];window._fbq.push([\"track\",\"PixelInitialized\",{}]);\u003C\/script\u003E\n\u003Cnoscript\u003E\u003Cimg height=\"1\" width=\"1\" alt=\"\" style=\"display:none\" src=\"https:\/\/www.facebook.com\/tr?id=101425363524479\u0026amp;ev=PixelInitialized\"\u003E\u003C\/noscript\u003E\n\n\u003Cscript type=\"text\/javascript\" language=\"javascript\"\u003Evar yahoo_retargeting_id=\"BKO82CLEGF\",yahoo_retargeting_label=\"\";\u003C\/script\u003E\n\u003Cscript type=\"text\/javascript\" language=\"javascript\" src=\"\/\/b92.yahoo.co.jp\/js\/s_retargeting.js\"\u003E\u003C\/script\u003E\n\n\u003Cimg height=\"1\" width=\"1\" border=\"0\" alt=\"\" src=\"https:\/\/aax-fe.amazon-adsystem.com\/s\/iui3?d=forester-did\u0026amp;ex-fargs=%3Fid%3D97c97873-b320-2f7a-9117-f3d5aa752a9e%26type%3Dnull%26m%3D6\u0026amp;ex-fch=416613\u0026amp;ex-src=udemy.com\u0026amp;ex-hargs=v%3D1.0%3Bc%3D7690357268661%3Bp%3D97C97873-B320-2F7A-9117-F3D5AA752A9E\"\u003E　",
      "vtp_supportDocumentWrite":true,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "vtp_usePostscribe":true,
      "tag_id":53
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript\u003Evar $course_id=jQuery(\"body\").attr(\"data-clp-course-id\");\nif(void 0!==$course_id\u0026\u00260\u003C$course_id.length){$course_id=jQuery(\"body\").attr(\"data-clp-course-id\");var price=jQuery(\".price-text__current\").text().replace(\"$\",\"\").trim().match(\/\\d+\/);void 0!==UD.GoogleAnalytics\u0026\u0026(UD.GoogleAnalytics.setValue(\"dimension5\",$course_id),UD.GoogleAnalytics.setValue(\"dimension6\",\"conversionintent\"),UD.GoogleAnalytics.setValue(\"dimension8\",price),UD.GoogleAnalytics.trackEvent(\"addtocartclick\",$course_id,price,{nonInteraction:1}));window._fbq=window._fbq||[];_fbq.push([\"track\",\n\"AddToCart\",{content_name:\"Shopping Cart\",content_ids:$course_id,content_type:\"product\"}])};\u003C\/script\u003E",
      "vtp_supportDocumentWrite":true,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "vtp_usePostscribe":true,
      "tag_id":60
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript\u003Ewindow._fbq=window._fbq||[];_fbq.push([\"track\",\"Purchase\",{content_ids:",["escape",["macro",33],8,16],",content_type:\"product\",order_id:",["escape",["macro",34],8,16],",value:",["escape",["macro",2],8,16],",currency:\"USD\"}]);\u003C\/script\u003E"],
      "vtp_supportDocumentWrite":true,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "vtp_usePostscribe":true,
      "tag_id":61
    },{
      "function":"__html",
      "once_per_load":true,
      "vtp_html":"\u003Cscript data-gtmsrc=\"https:\/\/www.dwin1.com\/6554.js\" type=\"text\/gtmscript\" defer\u003E\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":68
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript language=\"JavaScript\"\u003Evar OB_ADV_ID=26518,str='\\x3cscript src\\x3d\"\/\/widgets.outbrain.com\/obtp.js\" type\\x3d\"text\/javascript\"\\x3e\\x3c\/script\\x3e';document.write(str);\u003C\/script\u003E",
      "vtp_supportDocumentWrite":true,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "vtp_usePostscribe":true,
      "tag_id":83
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/javascript\"\u003Evar _pop=_pop||[];_pop.push([\"_set_conversion_id\",\"benesse_cci\"]);(function(){var a=document.createElement(\"script\");a.type=\"text\/javascript\";a.async=!0;a.src=(\"https:\"==document.location.protocol?\"https:\/\/\":\"http:\/\/\")+\"api.popin.cc\/conversion.js\";var b=document.getElementsByTagName(\"script\")[0];b.parentNode.insertBefore(a,b)})();\u003C\/script\u003E",
      "vtp_supportDocumentWrite":true,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "vtp_usePostscribe":true,
      "tag_id":84
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/javascript\"\u003E(function(){var a=document.createElement(\"script\");a.type=\"text\/javascript\";a.charset=\"utf-8\";a.async=!0;a.src=window.location.protocol+\"\/\/api.popin.cc\/ads\/benesse_cci.js\";var b=document.getElementsByTagName(\"script\")[0];b.parentNode.insertBefore(a,b)})();\u003C\/script\u003E",
      "vtp_supportDocumentWrite":true,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "vtp_usePostscribe":true,
      "tag_id":85
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript type=\"text\/javascript\"\u003Ewindow._tfa=window._tfa||[];_tfa.push({notify:\"action\",name:\"Conversion\",revenue:",["escape",["macro",2],8,16],"});\u003C\/script\u003E\n"],
      "vtp_supportDocumentWrite":true,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "vtp_usePostscribe":true,
      "tag_id":124
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript\u003Ewindow._fbq=window._fbq||[];_fbq.push([\"track\",\"SignupSuccess\"]);\u003C\/script\u003E",
      "vtp_supportDocumentWrite":true,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "vtp_usePostscribe":true,
      "tag_id":128
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript\u003Ewindow._fbq=window._fbq||[];_fbq.push([\"track\",\"SignupClick\"]);\u003C\/script\u003E",
      "vtp_supportDocumentWrite":true,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "vtp_usePostscribe":true,
      "tag_id":129
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\n\u003Cscript type=\"text\/javascript\"\u003E(function(){var a=window.MTBADVS=window.MTBADVS||{};a.ConvContext=a.ConvContext||{};a.ConvContext.queue=a.ConvContext.queue||[];a.ConvContext.queue.push({advertiser_id:1808,price:0,convtype:0,dat:\"\"});a=document.createElement(\"script\");a.type=\"text\/javascript\";a.async=!0;a.src=(\"https:\"==document.location.protocol?\"https:\/\/\":\"http:\/\/\")+\"js.mtburn.com\/advs-conversion.js\";var b=document.getElementsByTagName(\"script\")[0];b.parentNode.insertBefore(a,b)})();\u003C\/script\u003E\n\n        ",
      "vtp_supportDocumentWrite":true,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "vtp_usePostscribe":true,
      "tag_id":139
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003Evar _fout_queue=_fout_queue||{};void 0===_fout_queue.segment\u0026\u0026(_fout_queue.segment={});void 0===_fout_queue.segment.queue\u0026\u0026(_fout_queue.segment.queue=[]);_fout_queue.segment.queue.push({user_id:10595,advertiser_id:1808,contractor_id:5});(function(){var a=document.createElement(\"script\");a.type=\"text\/javascript\";a.async=!0;a.src=(\"https:\"==document.location.protocol?\"https:\/\/\":\"http:\/\/\")+\"js.fout.jp\/segmentation.js\";var b=document.getElementsByTagName(\"script\")[0];b.parentNode.insertBefore(a,b)})();\u003C\/script\u003E\n    ",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":140
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\n\u003Cscript type=\"text\/gtmscript\"\u003E(function(a,c,d,b,f,e){a.hj=a.hj||function(){(a.hj.q=a.hj.q||[]).push(arguments)};a._hjSettings={hjid:298206,hjsv:5};f=c.getElementsByTagName(\"head\")[0];e=c.createElement(\"script\");e.async=1;e.src=d+a._hjSettings.hjid+b+a._hjSettings.hjsv;f.appendChild(e)})(window,document,\"\/\/static.hotjar.com\/c\/hotjar-\",\".js?sv\\x3d\");\n(function(){var a=jQuery(\"body\"),c=a.attr(\"data-hotjar-page\"),d=a.attr(\"data-hotjar-device\");a=a.attr(\"data-hotjar-bw\");var b=[];c\u0026\u0026(b.push(c),d\u0026\u0026a\u0026\u0026b.push(d,a),b.push(void 0===UD.me.id?\"visitor\":\"user\"),hj(\"trigger\",b.join(\"-\")))})();\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":149
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript\u003Ewindow._fbq=window._fbq||[];_fbq.push([\"track\",\"NewUserPurchase\",{value:",["escape",["macro",2],8,16],",currency:\"USD\"}]);\u003C\/script\u003E"],
      "vtp_supportDocumentWrite":true,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "vtp_usePostscribe":true,
      "tag_id":156
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003E(function(){function b(){!1===c\u0026\u0026(c=!0,Munchkin.init(\"273-CKQ-053\"))}var c=!1,a=document.createElement(\"script\");a.type=\"text\/javascript\";a.async=!0;a.src=\"\/\/munchkin.marketo.net\/munchkin.js\";a.onreadystatechange=function(){\"complete\"!=this.readyState\u0026\u0026\"loaded\"!=this.readyState||b()};a.onload=b;document.getElementsByTagName(\"head\")[0].appendChild(a)})();\u003C\/script\u003E\n",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":157
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/javascript\"\u003Eadroll_adv_id=\"554CPNW4XBAX5EYKBL4HVU\";adroll_pix_id=\"OKLCQMMNANCRNGGEOKKR5M\";\n(function(){var a=function(){if(document.readyState\u0026\u0026!\/loaded|complete\/.test(document.readyState))setTimeout(a,10);else if(window.__adroll_loaded){var b=document.createElement(\"script\"),c=\"https:\"==document.location.protocol?\"https:\/\/s.adroll.com\":\"http:\/\/a.adroll.com\";b.setAttribute(\"async\",\"true\");b.type=\"text\/javascript\";b.src=c+\"\/j\/roundtrip.js\";((document.getElementsByTagName(\"head\")||[null])[0]||document.getElementsByTagName(\"script\")[0].parentNode).appendChild(b)}else __adroll_loaded=!0,setTimeout(a,\n50)};window.addEventListener?window.addEventListener(\"load\",a,!1):window.attachEvent(\"onload\",a)})();\u003C\/script\u003E",
      "vtp_supportDocumentWrite":true,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "vtp_usePostscribe":true,
      "tag_id":162
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript\u003Ewindow._fbq=window._fbq||[];_fbq.push([\"track\",\"LinkshareSignupClick\"]);\u003C\/script\u003E",
      "vtp_supportDocumentWrite":true,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "vtp_usePostscribe":true,
      "tag_id":164
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003Etry{__adroll.record_user({adroll_segments:\"a9df566e\"})}catch(a){};\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":165
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\n\u003Cimg src=\"https:\/\/secure.adnxs.com\/px?id=849711\u0026amp;t=2\" width=\"1\" height=\"1\"\u003E\n",
      "vtp_supportDocumentWrite":true,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "vtp_usePostscribe":true,
      "tag_id":167
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/javascript\"\u003E(function(){try{var b={id:\"6oe2u\",event:\"\"},a=document.createElement(\"script\");a.src=\"\/\/api.smartnews-ads.com\/assets\/conv.js?\"+(new Date).getTime();a.type=\"text\/javascript\";a.id=\"_smartnews_ads_conversion_script_\"+b.id;a.setAttribute(\"data-smartnews-ads\",JSON.stringify(b));(document.body||document.head).appendChild(a)}catch(c){}})();\u003C\/script\u003E",
      "vtp_supportDocumentWrite":true,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "vtp_usePostscribe":true,
      "tag_id":168
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\n\u003Cscript type=\"text\/javascript\"\u003E!function(){if(window.SmartnewsAds=window.SmartnewsAds||{},!window.SmartnewsAds.p){var a=window.SmartnewsAds.p=function(){a.callMethod?a.callMethod.apply(a,arguments):a.queue.push(arguments)};window.SmartnewsAds._p||(window.SmartnewsAds._p=a);a.push=a;a.version=\"1.0.0\";a.queue=[];var b=document.createElement(\"script\");b.async=!0;b.src=\"\/\/cdn.smartnews-ads.com\/i\/pixel.js\";var c=document.getElementsByTagName(\"script\")[0];c.parentNode.insertBefore(b,c)}}();SmartnewsAds.p(\"3743a3945eb6b3d209bbf3bc\",\"PageView\");\u003C\/script\u003E\n\u003Cnoscript\u003E\n\u003Cimg height=\"1\" width=\"1\" style=\"display:none;\" alt=\"\" src=\"https:\/\/i.smartnews-ads.com\/p?id=3743a3945eb6b3d209bbf3bc\u0026amp;e=PageView\"\u003E\n\u003C\/noscript\u003E",
      "vtp_supportDocumentWrite":true,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "vtp_usePostscribe":true,
      "tag_id":169
    },{
      "function":"__html",
      "setup_tags":["list",["tag",121,1]],
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript type=\"text\/gtmscript\"\u003Eire(\"trackConversion\",12148,{orderId:",["escape",["macro",38],8,16],",customerId:",["escape",["macro",39],8,16],",email:",["escape",["macro",40],8,16],",orderPromoCode:",["escape",["macro",41],8,16],",currencyCode:\"USD\",items:[{subTotal:",["escape",["macro",42],8,16],",category:",["escape",["macro",43],8,16],",sku:",["escape",["macro",44],8,16],",quantity:1}]});\u003C\/script\u003E"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":170
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003E(function(g,e,a,f,b,c,d){b.ire_o=a;b[a]=b[a]||function(){(b[a].a=b[a].a||[]).push(arguments)};c=f.createElement(e);d=f.getElementsByTagName(e)[0];c.async=1;c.src=g;d.parentNode.insertBefore(c,d)})(\"\/\/d.impactradius-event.com\/A380319-1bcf-4b7b-9299-22e85825ceea1.js\",\"script\",\"ire\",document,window);\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":171
    },{
      "function":"__html",
      "setup_tags":["list",["tag",121,1]],
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript type=\"text\/gtmscript\"\u003Eire(\"identify\",{customerId:",["escape",["macro",39],8,16],",customerEmail:",["escape",["macro",40],8,16],"});\u003C\/script\u003E\n"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":172
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\n\u003Cscript\u003E!function(b,e,f,g,a,c,d){b.fbq||(a=b.fbq=function(){a.callMethod?a.callMethod.apply(a,arguments):a.queue.push(arguments)},b._fbq||(b._fbq=a),a.push=a,a.loaded=!0,a.version=\"2.0\",a.queue=[],c=e.createElement(f),c.async=!0,c.src=g,d=e.getElementsByTagName(f)[0],d.parentNode.insertBefore(c,d))}(window,document,\"script\",\"https:\/\/connect.facebook.net\/en_US\/fbevents.js\");fbq(\"init\",\"455027734843984\");fbq(\"track\",\"PageView\");\u003C\/script\u003E\n\u003Cnoscript\u003E\u003Cimg height=\"1\" width=\"1\" style=\"display:none\" src=\"https:\/\/www.facebook.com\/tr?id=455027734843984\u0026amp;ev=PageView\u0026amp;noscript=1\"\u003E\u003C\/noscript\u003E\n\n",
      "vtp_supportDocumentWrite":true,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "vtp_usePostscribe":true,
      "tag_id":174
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\n\u003Cscript\u003E!function(d,e,f,a,b,c){d.twq||(a=d.twq=function(){a.exe?a.exe.apply(a,arguments):a.queue.push(arguments)},a.version=\"1.1\",a.queue=[],b=e.createElement(f),b.async=!0,b.src=\"\/\/static.ads-twitter.com\/uwt.js\",c=e.getElementsByTagName(f)[0],c.parentNode.insertBefore(b,c))}(window,document,\"script\");twq(\"init\",\"nv12m\");twq(\"track\",\"PageView\");\u003C\/script\u003E\n",
      "vtp_supportDocumentWrite":true,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "vtp_usePostscribe":true,
      "tag_id":175
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\n\u003Cscript src=\"\/\/platform.twitter.com\/oct.js\" type=\"text\/javascript\"\u003E\u003C\/script\u003E\n\u003Cscript type=\"text\/javascript\"\u003Etwttr.conversion.trackPid(\"ny0dy\",{tw_sale_amount:0,tw_order_quantity:0});\u003C\/script\u003E\n\u003Cnoscript\u003E\n\u003Cimg height=\"1\" width=\"1\" style=\"display:none;\" alt=\"\" src=\"https:\/\/analytics.twitter.com\/i\/adsct?txn_id=ny0dy\u0026amp;p_id=Twitter\u0026amp;tw_sale_amount=0\u0026amp;tw_order_quantity=0\"\u003E\n\u003Cimg height=\"1\" width=\"1\" style=\"display:none;\" alt=\"\" src=\"\/\/t.co\/i\/adsct?txn_id=ny0dy\u0026amp;p_id=Twitter\u0026amp;tw_sale_amount=0\u0026amp;tw_order_quantity=0\"\u003E\n\u003C\/noscript\u003E\n",
      "vtp_supportDocumentWrite":true,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "vtp_usePostscribe":true,
      "tag_id":176
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\n\u003Cscript\u003E!function(d,e,f,a,b,c){d.twq||(a=d.twq=function(){a.exe?a.exe.apply(a,arguments):a.queue.push(arguments)},a.version=\"1.1\",a.queue=[],b=e.createElement(f),b.async=!0,b.src=\"\/\/static.ads-twitter.com\/uwt.js\",c=e.getElementsByTagName(f)[0],c.parentNode.insertBefore(b,c))}(window,document,\"script\");twq(\"init\",\"nv12m\");twq(\"track\",\"PageView\");\u003C\/script\u003E\n",
      "vtp_supportDocumentWrite":true,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "vtp_usePostscribe":true,
      "tag_id":177
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript\u003Ewindow._fbq=window._fbq||[];_fbq.push([\"track\",\"BecomeAnInstructor\"]);sendPageEvent(\"track\",\"teach_funnel\",{action:\"create-course\"});\u003C\/script\u003E",
      "vtp_supportDocumentWrite":true,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "vtp_usePostscribe":true,
      "tag_id":180
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/javascript\"\u003Evar _fout_queue=_fout_queue||{};void 0===_fout_queue.segment\u0026\u0026(_fout_queue.segment={});void 0===_fout_queue.segment.queue\u0026\u0026(_fout_queue.segment.queue=[]);_fout_queue.segment.queue.push({user_id:23601,advertiser_id:8881,contractor_id:5});(function(){var a=document.createElement(\"script\");a.type=\"text\/javascript\";a.async=!0;a.src=(\"https:\"==document.location.protocol?\"https:\/\/\":\"http:\/\/\")+\"js.fout.jp\/segmentation.js\";var b=document.getElementsByTagName(\"script\")[0];b.parentNode.insertBefore(a,b)})();\u003C\/script\u003E",
      "vtp_supportDocumentWrite":true,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "vtp_usePostscribe":true,
      "tag_id":182
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/javascript\"\u003E(function(){var a=window.MTBADVS=window.MTBADVS||{};a.ConvContext=a.ConvContext||{};a.ConvContext.queue=a.ConvContext.queue||[];a.ConvContext.queue.push({advertiser_id:8881,price:0,convtype:1,dat:\"\"});a=document.createElement(\"script\");a.type=\"text\/javascript\";a.async=!0;a.src=(\"https:\"==document.location.protocol?\"https:\/\/\":\"http:\/\/\")+\"js.mtburn.com\/advs-conversion.js\";var b=document.getElementsByTagName(\"script\")[0];b.parentNode.insertBefore(a,b)})();\u003C\/script\u003E",
      "vtp_supportDocumentWrite":true,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "vtp_usePostscribe":true,
      "tag_id":183
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003Evar request=new XMLHttpRequest;request.open(\"POST\",\"\/api-2.0\/growth-analytics\/gtm-verifier\",!0);request.setRequestHeader(\"Content-Type\",\"application\/json; charset\\x3dUTF-8\");request.setRequestHeader(\"X-Requested-With\",\"XMLHttpRequest\");request.send(JSON.stringify({type:\"aff\"}));\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":184
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003Evar request=new XMLHttpRequest;request.open(\"POST\",\"\/api-2.0\/growth-analytics\/gtm-verifier\",!0);request.setRequestHeader(\"Content-Type\",\"application\/json; charset\\x3dUTF-8\");request.setRequestHeader(\"X-Requested-With\",\"XMLHttpRequest\");request.send(JSON.stringify({type:\"paid_acq\"}));\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":185
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/javascript\"\u003E(function(){try{var b={id:\"88dg1\",event:\"\"},a=document.createElement(\"script\");a.src=\"\/\/api.smartnews-ads.com\/assets\/conv.js?\"+(new Date).getTime();a.type=\"text\/javascript\";a.id=\"_smartnews_ads_conversion_script_\"+b.id;a.setAttribute(\"data-smartnews-ads\",JSON.stringify(b));(document.body||document.head).appendChild(a)}catch(c){}})();\u003C\/script\u003E",
      "vtp_supportDocumentWrite":true,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "vtp_usePostscribe":true,
      "tag_id":188
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript src=\"https:\/\/bannerfarm.aolp.jp\/smartpxl\/89892\/smartpxl.js\" type=\"text\/javascript\"\u003E\u003C\/script\u003E",
      "vtp_supportDocumentWrite":true,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "vtp_usePostscribe":true,
      "tag_id":190
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/javascript\"\u003Ewindow._tfa=window._tfa||[];window._tfa.push({notify:\"event\",name:\"page_view\"});!function(a,b,d,c){document.getElementById(c)||(a.async=1,a.src=d,a.id=c,b.parentNode.insertBefore(a,b))}(document.createElement(\"script\"),document.getElementsByTagName(\"script\")[0],\"\/\/cdn.taboola.com\/libtrc\/unip\/1147638\/tfa.js\",\"tb_tfa_script\");\u003C\/script\u003E\n\u003Cnoscript\u003E\n  \u003Cimg src=\"\/\/trc.taboola.com\/1147638\/log\/3\/unip?en=page_view\" width=\"0\" height=\"0\" style=\"display:none\"\u003E\n\u003C\/noscript\u003E",
      "vtp_supportDocumentWrite":true,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "vtp_usePostscribe":true,
      "tag_id":191
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003Ewindow._tfa=window._tfa||[];_tfa.push({notify:\"action\",name:\"conversion\"});\u003C\/script\u003E\n\u003Cscript data-gtmsrc=\"\/\/cdn.taboola.com\/libtrc\/3500045453-SC-prod\/tfa.js\" type=\"text\/gtmscript\"\u003E\u003C\/script\u003E\n\u003Cnoscript\u003E\n\u003Cimg src=\"\/\/trc.taboola.com\/3500045453-SC-prod\/log\/3\/action?name=conversion\u0026amp;item-url={encoded_page_url}\" width=\"0\" height=\"0\"\u003E\n\u003C\/noscript\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":192
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/javascript\"\u003Ewindow._tfa=window._tfa||[];_tfa.push({notify:\"mark\",type:\"6317021retargeting\"});\u003C\/script\u003E\n\u003Cscript src=\"\/\/cdn.taboola.com\/libtrc\/3500045453-SC-prod\/tfa.js\"\u003E\u003C\/script\u003E\n\u003Cnoscript\u003E\n\u003Cimg src=\"\/\/trc.taboola.com\/3500045453-SC-prod\/log\/3\/mark?marking-type=6317021retargeting\u0026amp;item-url={encoded_page_url}\" width=\"0\" height=\"0\"\u003E\n\u003C\/noscript\u003E",
      "vtp_supportDocumentWrite":true,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "vtp_usePostscribe":true,
      "tag_id":193
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/javascript\"\u003Ewindow._tfa=window._tfa||[];_tfa.push({notify:\"mark\",type:\"6314024retargeting\"});\u003C\/script\u003E\n\u003Cscript src=\"\/\/cdn.taboola.com\/libtrc\/3500045453-SC-prod\/tfa.js\"\u003E\u003C\/script\u003E\n\u003Cnoscript\u003E\n\u003Cimg src=\"\/\/trc.taboola.com\/3500045453-SC-prod\/log\/3\/mark?marking-type=6314024retargeting\u0026amp;item-url={encoded_page_url}\" width=\"0\" height=\"0\"\u003E\n\u003C\/noscript\u003E \n",
      "vtp_supportDocumentWrite":true,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "vtp_usePostscribe":true,
      "tag_id":194
    }],
  "predicates":[{
      "function":"_re",
      "arg0":["macro",15],
      "arg1":".*"
    },{
      "function":"_cn",
      "arg0":["macro",16],
      "arg1":"\/create-learning-portal\/"
    },{
      "function":"_eq",
      "arg0":["macro",17],
      "arg1":"undefined"
    },{
      "function":"_eq",
      "arg0":["macro",18],
      "arg1":"gtm.js"
    },{
      "function":"_cn",
      "arg0":["macro",16],
      "arg1":"\/tapen\/"
    },{
      "function":"_ew",
      "arg0":["macro",15],
      "arg1":"signup_success=1"
    },{
      "function":"_eq",
      "arg0":["macro",10],
      "arg1":"true"
    },{
      "function":"_re",
      "arg0":["macro",15],
      "arg1":"udemy\\.com\\\/cart\\\/success"
    },{
      "function":"_gt",
      "arg0":["macro",3],
      "arg1":"0"
    },{
      "function":"_eq",
      "arg0":["macro",18],
      "arg1":"transaction_purchase"
    },{
      "function":"_eq",
      "arg0":["macro",16],
      "arg1":"\/jp\/"
    },{
      "function":"_eq",
      "arg0":["macro",18],
      "arg1":"full_transaction"
    },{
      "function":"_eq",
      "arg0":["macro",18],
      "arg1":"instructor_analytics"
    },{
      "function":"_cn",
      "arg0":["macro",25],
      "arg1":"\/payment\/checkout\/"
    },{
      "function":"_cn",
      "arg0":["macro",5],
      "arg1":"button-enroll-b"
    },{
      "function":"_eq",
      "arg0":["macro",26],
      "arg1":"take-this-course-button"
    },{
      "function":"_eq",
      "arg0":["macro",18],
      "arg1":"gtm.click"
    },{
      "function":"_gt",
      "arg0":["macro",7],
      "arg1":"0"
    },{
      "function":"_eq",
      "arg0":["macro",0],
      "arg1":"undefined"
    },{
      "function":"_eq",
      "arg0":["macro",18],
      "arg1":"gtm.timer"
    },{
      "function":"_re",
      "arg0":["macro",27],
      "arg1":"(^$|((^|,)164179_139($|,)))"
    },{
      "function":"_eq",
      "arg0":["macro",28],
      "arg1":"submit-id-submit"
    },{
      "function":"_cn",
      "arg0":["macro",29],
      "arg1":"btn btn-primary btn btn-success"
    },{
      "function":"_cn",
      "arg0":["macro",15],
      "arg1":"cart\/success"
    },{
      "function":"_re",
      "arg0":["macro",16],
      "arg1":"^\/?organization\/.*$"
    },{
      "function":"_cn",
      "arg0":["macro",15],
      "arg1":"https:\/\/www.udemy.com\/create-learning-portal\/"
    },{
      "function":"_cn",
      "arg0":["macro",28],
      "arg1":"submit-id-submit"
    },{
      "function":"_re",
      "arg0":["macro",15],
      "arg1":"\\\/course\\\/([0-9]*)\\\/manage\\\/feedback\\\/test"
    },{
      "function":"_cn",
      "arg0":["macro",29],
      "arg1":"middle create_course button"
    },{
      "function":"_cn",
      "arg0":["macro",29],
      "arg1":"btn btn-primary btn-huge btn-shadowed btn-lg join-btn"
    },{
      "function":"_cn",
      "arg0":["macro",15],
      "arg1":"\/affiliate\/"
    },{
      "function":"_eq",
      "arg0":["macro",16],
      "arg1":"\/"
    },{
      "function":"_re",
      "arg0":["macro",16],
      "arg1":"^\/?courses\/search\/.*$"
    },{
      "function":"_cn",
      "arg0":["macro",15],
      "arg1":"\/learn\/v4\/"
    },{
      "function":"_eq",
      "arg0":["macro",14],
      "arg1":"true"
    },{
      "function":"_eq",
      "arg0":["macro",13],
      "arg1":"category"
    },{
      "function":"_eq",
      "arg0":["macro",13],
      "arg1":"subcategory"
    },{
      "function":"_sw",
      "arg0":["macro",16],
      "arg1":"\/cart\/subscribe"
    },{
      "function":"_sw",
      "arg0":["macro",16],
      "arg1":"\/cart\/success"
    },{
      "function":"_sw",
      "arg0":["macro",16],
      "arg1":"\/mobile\/"
    },{
      "function":"_cn",
      "arg0":["macro",15],
      "arg1":"\/cart\/"
    },{
      "function":"_cn",
      "arg0":["macro",15],
      "arg1":"udemy.com"
    },{
      "function":"_re",
      "arg0":["macro",16],
      "arg1":"^\/?course\/subscribe\/.*$"
    },{
      "function":"_re",
      "arg0":["macro",30],
      "arg1":".*\\.dev\\.udemy\\.com",
      "ignore_case":true
    },{
      "function":"_re",
      "arg0":["macro",30],
      "arg1":"2u.udemy.com|360E.udemy.com|abtasty.udemy.com|ABD.udemy.com|accesscapital.udemy.com|acemotor.udemy.com|adnatcongsco.udemy.com|adroll.udemy.com|akqa.udemy.com|akhbar.udemy.com|amaysim.udemy.com|Ampush.udemy.com|angelcitydata.udemy.com|anudip.udemy.com|apiheattransfer.udemy.com|aucklandcouncil.udemy.com|avascent.udemy.com|avg.udemy.com|iclas.udemy.com|azumo.udemy.com|bandwidth.udemy.com|bayt.udemy.com|beepi.udemy.com|bethyl.udemy.com|bulletproof.udemy.com|campusexplorer.udemy.com|caribbeanideas.udemy.com|carsguide.udemy.com|cchscarelink.udemy.com|cnu.udemy.com|ciazumano.udemy.com|cision.udemy.com|cloudreach.udemy.com|cacfp.udemy.com|collegespring.udemy.com|chs.udemy.com|continental.udemy.com|dcmservices.udemy.com|delivery.udemy.com|kyna.udemy.com|develappme.udemy.com|dichter-neira.udemy.com|duouniversity.udemy.com|teradyne-std-learning.udemy.com|eastwest.udemy.com|eastexcrude.udemy.com|echo3.udemy.com|edm.udemy.com|esa-ift.udemy.com|crunchyroll.udemy.com|ei.udemy.com|esa.udemy.com|examsoft.udemy.com|fleetmaticsacademy.udemy.com|http:\/\/fullscreen.udemy.com\/|fundamentallabor.udemy.com|fundingcircle.udemy.com|globalstrategies.udemy.com|cdp.udemy.com|glm.udemy.com|companybypeople.udemy.com|harbingergroup.udemy.com|hawaiisnacks.udemy.com|hbconstruction.udemy.com|hostpapa.udemy.com|huddle.udemy.com|ibm.udemy.com|geotecnologies.udemy.com|ignyte.udemy.com|imagineteam.udemy.com|inkblot.udemy.com|insite.udemy.com|instacart.udemy.com|jimenezconsulting.udemy.com|kimble-chase.udemy.com|kookmin.udemy.com|laneconstruct.udemy.com|lightsailenergy.udemy.com|lmuec.udemy.com|lpsoftware.udemy.com|lyft.udemy.com|cmsteam.udemy.com|mareku.udemy.com|MTC.udemy.com|mattex.udemy.com|mb3.udemy.com|melanoma.udemy.com|mmc.udemy.com|meridian.udemy.com|mixpanel.udemy.com|moboom.udemy.com|mre-consulting.udemy.com|michiganlottery.udemy.com|nike.udemy.com|nrtwebservices.udemy.com|ornl.udemy.com|ohiogt.udemy.com|on24.udemy.com|optimizely.udemy.com|optis.udemy.com|odc.udemy.com|oidtraining.udemy.com|pacificwoodtech.udemy.com|pagerduty.udemy.com|pwconsulting.udemy.com|pitneybowes.udemy.com|pjdick.udemy.com|platinum.udemy.com|powertech.udemy.com|powerteq.udemy.com|pretlist.udemy.com|proofpoint.udemy.com|prophet.udemy.com|quemetco.udemy.com|rslempdev.udemy.com|realnet.udemy.com|rottapharm.udemy.com|SLCC.udemy.com|thesentergroup.udemy.com|signaturehealthinc.udemy.com|step.udemy.com|stonehambank.udemy.com|cpfl.udemy.com|sweetwater.udemy.com|syndicatesales.udemy.com|tamkeentech.udemy.com|tegile.udemy.com|tamu.udemy.com|chernin.udemy.com|sideout.udemy.com|wistar.udemy.com|thoughtspot.udemy.com|toptal.udemy.com|tomo.udemy.com|tpipr.udemy.com|trginternational.udemy.com|tricerat.udemy.com|tpl.udemy.com|type1team.udemy.com|redal.udemy.com|unifiedtcg.udemy.com|Valin.udemy.com|viki.udemy.com|walmart.udemy.com|wanhaisg.udemy.com|webair.udemy.com|webanywhere.udemy.com|wedbush.udemy.com|egs.udemy.com|wipro.udemy.com|wolfram.udemy.com|worldpac.udemy.com|xoomworks.udemy.com|xtremeconsulting.udemy.com|yemeksepeti.udemy.com|zeeto.udemy.com|zensar.udemy.com|learning.udemy.com|paulatest.udemy.com"
    },{
      "function":"_cn",
      "arg0":["macro",16],
      "arg1":"organization-manage"
    },{
      "function":"_re",
      "arg0":["macro",30],
      "arg1":"^(aws-dr|www).udemy.com.*$"
    },{
      "function":"_eq",
      "arg0":["macro",18],
      "arg1":"gtm.load"
    },{
      "function":"_re",
      "arg0":["macro",16],
      "arg1":"^\/?payment\/^success"
    },{
      "function":"_sw",
      "arg0":["macro",16],
      "arg1":"\/apps\/admin"
    },{
      "function":"_cn",
      "arg0":["macro",15],
      "arg1":"www.udemy.com\/course-manage\/edit-getting-started\/"
    },{
      "function":"_eq",
      "arg0":["macro",18],
      "arg1":"gtm.dom"
    },{
      "function":"_cn",
      "arg0":["macro",32],
      "arg1":"true"
    },{
      "function":"_cn",
      "arg0":["macro",15],
      "arg1":"https:\/\/www.udemy.com\/courses\/?pmtag=blog\u0026utm_source=blog\u0026utm_medium=udemyads\u0026utm_content=hellobar\u0026utm_campaign=content-marketing-blog\u0026source=blogpop\u0026utm_source=blog\u0026utm_medium=udemyads\u0026utm_content=post0\u0026utm_campaign=content-marketing-blog\u0026xref=blog"
    },{
      "function":"_re",
      "arg0":["macro",15],
      "arg1":"\\\/collection\\\/jp\\-"
    },{
      "function":"_re",
      "arg0":["macro",0],
      "arg1":"[0-9]+"
    },{
      "function":"_eq",
      "arg0":["macro",10],
      "arg1":"True"
    },{
      "function":"_cn",
      "arg0":["macro",29],
      "arg1":"add-to-cart"
    },{
      "function":"_sw",
      "arg0":["macro",16],
      "arg1":"\/cart\/"
    },{
      "function":"_sw",
      "arg0":["macro",16],
      "arg1":"\/courses\/"
    },{
      "function":"_sw",
      "arg0":["macro",16],
      "arg1":"\/home\/my-courses\/"
    },{
      "function":"_sw",
      "arg0":["macro",16],
      "arg1":"\/collection\/"
    },{
      "function":"_eq",
      "arg0":["macro",16],
      "arg1":"\/home\/teaching\/topics\/"
    },{
      "function":"_eq",
      "arg0":["macro",12],
      "arg1":"undefined"
    },{
      "function":"_cn",
      "arg0":["macro",16],
      "arg1":"\/manage\/feedback\/test\/"
    },{
      "function":"_eq",
      "arg0":["macro",16],
      "arg1":"\/home\/teaching\/insights\/"
    },{
      "function":"_eq",
      "arg0":["macro",16],
      "arg1":"\/affiliate\/"
    },{
      "function":"_re",
      "arg0":["macro",16],
      "arg1":"\/.+\/learn\/v4\/.+\/reviews\/|\/home\/my-courses\/.+\/.+\/reviews\/"
    },{
      "function":"_sw",
      "arg0":["macro",16],
      "arg1":"\/teaching\/"
    },{
      "function":"_sw",
      "arg0":["macro",16],
      "arg1":"\/topic"
    },{
      "function":"_sw",
      "arg0":["macro",16],
      "arg1":"\/gift\/"
    },{
      "function":"_sw",
      "arg0":["macro",16],
      "arg1":"\/gift\/redeem\/"
    },{
      "function":"_sw",
      "arg0":["macro",16],
      "arg1":"\/gift\/share\/"
    },{
      "function":"_eq",
      "arg0":["macro",18],
      "arg1":"new_user_transaction_purchase"
    },{
      "function":"_eq",
      "arg0":["macro",35],
      "arg1":"affiliate_purchase_data"
    },{
      "function":"_eq",
      "arg0":["macro",36],
      "arg1":"true"
    },{
      "function":"_eq",
      "arg0":["macro",37],
      "arg1":"impact_radius"
    },{
      "function":"_eq",
      "arg0":["macro",18],
      "arg1":"affiliate_purchase_data"
    },{
      "function":"_cn",
      "arg0":["macro",15],
      "arg1":"127.0.0.1"
    },{
      "function":"_re",
      "arg0":["macro",30],
      "arg1":".*\\.devs\\.dev-ud\\.com",
      "ignore_case":true
    },{
      "function":"_cn",
      "arg0":["macro",15],
      "arg1":"localhost"
    },{
      "function":"_re",
      "arg0":["macro",16],
      "arg1":"^\/teach\/?$"
    },{
      "function":"_cn",
      "arg0":["macro",15],
      "arg1":"\/home\/teaching\/onboarding\/"
    }],
  "rules":[
    [["if",0,3],["unless",1,2],["add",2,3,0,111,121,122,128]],
    [["if",3,5,6],["add",4,5,8,89,90,91,96,97]],
    [["if",3,7],["add",6,12,13,15,28,40,85,103,104,105,123]],
    [["if",8,9],["add",6,15,31,43,85,101,106,117,129,131,132]],
    [["if",3,10],["add",7,94,95]],
    [["if",0,3,6],["add",9,26,29,38,42,110,119,126,133,134,136,137]],
    [["if",6,11],["add",10,11]],
    [["if",3,4],["add",14],["block",2,3,9,16,23,26,29,38,42,86,1,102,0,110,114,116,119,121,122,126,128]],
    [["if",3],["add",14,16,36,102,114,45,46,47,48,49,73,74,75,76,77,78,79,81,82,83]],
    [["if",12],["add",17,18]],
    [["if",13,14,15,16],["add",19]],
    [["if",13,15,16],["unless",14],["add",20]],
    [["if",3,17],["add",21]],
    [["if",3],["unless",18],["add",22,44,111,50,53,54,57,59,61,64,66,68,69,70,72]],
    [["if",19,20],["add",23]],
    [["if",16,21,22],["add",24,108]],
    [["if",11],["add",25,30,35,37]],
    [["if",6,8,9],["add",27,41,109,118,124,125,135],["block",136,137]],
    [["if",3,23],["add",28]],
    [["if",3,25],["add",32,113]],
    [["if",16,26,27],["add",33]],
    [["if",16,28],["add",34]],
    [["if",16,29,30],["add",39,115]],
    [["if",3,31],["add",44,111]],
    [["if",3,32],["add",44]],
    [["if",3,33],["add",44,111],["block",121,122]],
    [["if",3,31,34],["add",44,111]],
    [["if",3,35],["add",44,111]],
    [["if",3,36],["add",44,111]],
    [["if",3,37],["add",44,111]],
    [["if",3,38],["add",44,111]],
    [["if",3,39],["add",44]],
    [["if",3,40],["add",51,52,55,56,58,60,62,63,65,67,71]],
    [["if",3,41],["add",80]],
    [["if",3,42],["add",84]],
    [["if",3,43],["add",86],["block",120,121,122]],
    [["if",3,44],["unless",45],["add",86]],
    [["if",46,47],["add",86]],
    [["if",3,46],["add",1]],
    [["if",3,50],["add",87,88]],
    [["if",51],["add",92]],
    [["if",51,52],["add",93,116],["block",110]],
    [["if",51,53],["add",98]],
    [["if",3,54],["add",99]],
    [["if",51,55,56],["add",99]],
    [["if",16,57],["add",100]],
    [["if",3,5],["add",107]],
    [["if",3,58],["add",111]],
    [["if",3,59],["add",111]],
    [["if",3,60],["add",111],["block",121,122]],
    [["if",3,61],["add",111]],
    [["if",3,62],["add",111]],
    [["if",3],["unless",63],["add",111]],
    [["if",3,64],["add",111]],
    [["if",3,65],["add",111]],
    [["if",3,66],["add",111]],
    [["if",3,67],["add",111]],
    [["if",3,68],["add",111,111]],
    [["if",3,69],["add",111]],
    [["if",0,2,3],["unless",1],["add",111]],
    [["if",3,70],["unless",71,72],["add",111]],
    [["if",8,73],["add",112]],
    [["if",74,75,76,77],["add",120,130]],
    [["if",3,82],["add",127]],
    [["if",3,24],["block",29,86,1]],
    [["if",3,48],["block",86]],
    [["if",3,49],["block",1]],
    [["if",3,78],["block",120,121,122]],
    [["if",3,79],["block",120,121,122]],
    [["if",3,80],["block",120,121,122]],
    [["if",3,81],["block",121,122]]]
},
"runtime":[
[],[]
]};

var ba=this,fa=function(){if(null===da){var a;a:{var b=ba.document,c=b.querySelector&&b.querySelector("script[nonce]");if(c){var d=c.nonce||c.getAttribute("nonce");if(d&&ea.test(d)){a=d;break a}}a=null}da=a||""}return da},ea=/^[\w+/_-]+[=]{0,2}$/,da=null,ha=function(a,b){function c(){}c.prototype=b.prototype;a.$e=b.prototype;a.prototype=new c;a.prototype.constructor=a;a.Ie=function(a,c,f){for(var d=Array(arguments.length-2),e=2;e<arguments.length;e++)d[e-2]=arguments[e];return b.prototype[c].apply(a,
d)}};var g=function(a,b){this.w=a;this.md=b};g.prototype.zd=function(){return this.w};g.prototype.getType=g.prototype.zd;g.prototype.getData=function(){return this.md};g.prototype.getData=g.prototype.getData;var ka=function(a){return"number"===typeof a&&0<=a&&isFinite(a)&&0===a%1||"string"===typeof a&&"-"!==a[0]&&a===""+parseInt(a,10)},la=function(){this.ja={};this.Aa=!1};la.prototype.get=function(a){return this.ja["dust."+a]};la.prototype.set=function(a,b){!this.Aa&&(this.ja["dust."+a]=b)};la.prototype.has=function(a){return this.ja.hasOwnProperty("dust."+a)};var ma=function(a){var b=[],c;for(c in a.ja)a.ja.hasOwnProperty(c)&&b.push(c.substr(5));return b};
la.prototype.remove=function(a){!this.Aa&&delete this.ja["dust."+a]};la.prototype.J=function(){this.Aa=!0};var v=function(a){this.ma=new la;this.h=[];a=a||[];for(var b in a)a.hasOwnProperty(b)&&(ka(b)?this.h[Number(b)]=a[Number(b)]:this.ma.set(b,a[b]))};v.prototype.toString=function(){for(var a=[],b=0;b<this.h.length;b++){var c=this.h[b];null===c||void 0===c?a.push(""):a.push(c.toString())}return a.join(",")};v.prototype.set=function(a,b){if("length"==a){if(!ka(b))throw"RangeError: Length property must be a valid integer.";this.h.length=Number(b)}else ka(a)?this.h[Number(a)]=b:this.ma.set(a,b)};
v.prototype.set=v.prototype.set;v.prototype.get=function(a){return"length"==a?this.length():ka(a)?this.h[Number(a)]:this.ma.get(a)};v.prototype.get=v.prototype.get;v.prototype.length=function(){return this.h.length};v.prototype.P=function(){for(var a=ma(this.ma),b=0;b<this.h.length;b++)a.push(b+"");return new v(a)};v.prototype.getKeys=v.prototype.P;v.prototype.remove=function(a){ka(a)?delete this.h[Number(a)]:this.ma.remove(a)};v.prototype.remove=v.prototype.remove;v.prototype.pop=function(){return this.h.pop()};
v.prototype.pop=v.prototype.pop;v.prototype.push=function(a){return this.h.push.apply(this.h,Array.prototype.slice.call(arguments))};v.prototype.push=v.prototype.push;v.prototype.shift=function(){return this.h.shift()};v.prototype.shift=v.prototype.shift;v.prototype.splice=function(a,b,c){return new v(this.h.splice.apply(this.h,arguments))};v.prototype.splice=v.prototype.splice;v.prototype.unshift=function(a){return this.h.unshift.apply(this.h,Array.prototype.slice.call(arguments))};
v.prototype.unshift=v.prototype.unshift;v.prototype.has=function(a){return ka(a)&&this.h.hasOwnProperty(a)||this.ma.has(a)};var na=function(){function a(a,b){c[a]=b}function b(){c={}}var c={},d={add:a,reset:b,create:function(d){var e={add:a,request:function(a,b){return c[a]?c[a].apply(d,Array.prototype.slice.call(arguments,1)):!1},reset:b};e.add=e.add;e.request=e.request;e.reset=e.reset;return e}};d.add=d.add;d.reset=d.reset;return d};var oa=function(){function a(a,c){if(b[a]){if(b[a].Oa+c>b[a].max)throw Error("Quota exceeded");b[a].Oa+=c}}var b={},c=void 0,d=void 0,e={Wd:function(a){c=a},Tb:function(){c&&a(c,1)},Xd:function(a){d=a},T:function(b){d&&a(d,b)},se:function(a,c){b[a]=b[a]||{Oa:0};b[a].max=c},yd:function(a){return b[a]&&b[a].Oa||0},reset:function(){b={}},fd:a};e.onFnConsume=e.Wd;e.consumeFn=e.Tb;e.onStorageConsume=e.Xd;e.consumeStorage=e.T;e.setMax=e.se;e.getConsumed=e.yd;e.reset=e.reset;e.consume=e.fd;return e};var pa=function(a,b,c){this.K=a;this.Z=b;this.Y=c;this.h=new la};pa.prototype.add=function(a,b){this.h.Aa||(this.K.T(("string"===typeof a?a.length:1)+("string"===typeof b?b.length:1)),this.h.set(a,b))};pa.prototype.add=pa.prototype.add;pa.prototype.set=function(a,b){this.h.Aa||(this.Y&&this.Y.has(a)?this.Y.set(a,b):(this.K.T(("string"===typeof a?a.length:1)+("string"===typeof b?b.length:1)),this.h.set(a,b)))};pa.prototype.set=pa.prototype.set;
pa.prototype.get=function(a){return this.h.has(a)?this.h.get(a):this.Y?this.Y.get(a):void 0};pa.prototype.get=pa.prototype.get;pa.prototype.has=function(a){return!!this.h.has(a)||!(!this.Y||!this.Y.has(a))};pa.prototype.has=pa.prototype.has;pa.prototype.H=function(){return this.K};pa.prototype.J=function(){this.h.J()};var qa=function(a){return"[object Array]"==Object.prototype.toString.call(Object(a))},ra=function(a,b){if(Array.prototype.indexOf){var c=a.indexOf(b);return"number"==typeof c?c:-1}for(var d=0;d<a.length;d++)if(a[d]===b)return d;return-1};var w=function(a,b){la.call(this);this.jc=a;this.wd=b};ha(w,la);var ua=function(a,b){for(var c,d=0;d<b.length&&!(c=ta(a,b[d]),c instanceof g);d++);return c},ta=function(a,b){var c=a.get(String(b[0]));if(!(c&&c instanceof w))throw"Attempting to execute non-function "+b[0]+".";return c.m.apply(c,[a].concat(b.slice(1)))};w.prototype.toString=function(){return this.jc};w.prototype.getName=function(){return this.jc};w.prototype.getName=w.prototype.getName;w.prototype.P=function(){return new v(ma(this))};
w.prototype.getKeys=w.prototype.P;w.prototype.m=function(a,b){var c,d={B:function(){return a},evaluate:function(b){var c=a;return qa(b)?ta(c,b):b},wa:function(b){return ua(a,b)},H:function(){return a.H()},Oe:function(){c||(c=a.Z.create(d));return c}};a.H().Tb();return this.wd.apply(d,Array.prototype.slice.call(arguments,1))};w.prototype.invoke=w.prototype.m;var va=function(){la.call(this)};ha(va,la);va.prototype.P=function(){return new v(ma(this))};va.prototype.getKeys=va.prototype.P;/*
 jQuery v1.9.1 (c) 2005, 2012 jQuery Foundation, Inc. jquery.org/license. */
var wa=/\[object (Boolean|Number|String|Function|Array|Date|RegExp)\]/,xa=function(a){if(null==a)return String(a);var b=wa.exec(Object.prototype.toString.call(Object(a)));return b?b[1].toLowerCase():"object"},ya=function(a,b){return Object.prototype.hasOwnProperty.call(Object(a),b)},za=function(a){if(!a||"object"!=xa(a)||a.nodeType||a==a.window)return!1;try{if(a.constructor&&!ya(a,"constructor")&&!ya(a.constructor.prototype,"isPrototypeOf"))return!1}catch(c){return!1}for(var b in a);return void 0===
b||ya(a,b)},x=function(a,b){var c=b||("array"==xa(a)?[]:{}),d;for(d in a)if(ya(a,d)){var e=a[d];"array"==xa(e)?("array"!=xa(c[d])&&(c[d]=[]),c[d]=x(e,c[d])):za(e)?(za(c[d])||(c[d]={}),c[d]=x(e,c[d])):c[d]=e}return c};var Aa=function(a){if(a instanceof v){for(var b=[],c=a.length(),d=0;d<c;d++)a.has(d)&&(b[d]=Aa(a.get(d)));return b}if(a instanceof va){for(var e={},f=a.P(),h=f.length(),k=0;k<h;k++)e[f.get(k)]=Aa(a.get(f.get(k)));return e}return a instanceof w?function(){for(var b=Array.prototype.slice.call(arguments,0),c=0;c<b.length;c++)b[c]=Ca(b[c]);var d=new pa(oa(),na());return Aa(a.m.apply(a,[d].concat(b)))}:a},Ca=function(a){if(qa(a)){for(var b=[],c=0;c<a.length;c++)a.hasOwnProperty(c)&&(b[c]=Ca(a[c]));return new v(b)}if(za(a)){var d=
new va,e;for(e in a)a.hasOwnProperty(e)&&d.set(e,Ca(a[e]));return d}if("function"===typeof a)return new w("",function(b){for(var c=Array.prototype.slice.call(arguments,0),d=0;d<c.length;d++)c[d]=Aa(this.evaluate(c[d]));return Ca(a.apply(a,c))});var f=typeof a;if(null===a||"string"===f||"number"===f||"boolean"===f)return a};var Da={control:function(a,b){return new g(a,this.evaluate(b))},fn:function(a,b,c){var d=this.B(),e=this.evaluate(b);if(!(e instanceof v))throw"Error: non-List value given for Fn argument names.";var f=Array.prototype.slice.call(arguments,2);this.H().T(a.length+f.length);return new w(a,function(){return function(a){for(var b=new pa(d.K,d.Z,d),c=Array.prototype.slice.call(arguments,0),h=0;h<c.length;h++)if(c[h]=this.evaluate(c[h]),c[h]instanceof g)return c[h];for(var n=e.get("length"),p=0;p<n;p++)p<
c.length?b.set(e.get(p),c[p]):b.set(e.get(p),void 0);b.set("arguments",new v(c));var q=ua(b,f);if(q instanceof g)return"return"===q.w?q.getData():q}}())},list:function(a){var b=this.H();b.T(arguments.length);for(var c=new v,d=0;d<arguments.length;d++){var e=this.evaluate(arguments[d]);"string"===typeof e&&b.T(e.length?e.length-1:0);c.push(e)}return c},map:function(a){for(var b=this.H(),c=new va,d=0;d<arguments.length-1;d+=2){var e=this.evaluate(arguments[d])+"",f=this.evaluate(arguments[d+1]),h=e.length;
h+="string"===typeof f?f.length:1;b.T(h);c.set(e,f)}return c},undefined:function(){}};var y=function(){this.K=oa();this.Z=na();this.ya=new pa(this.K,this.Z)};y.prototype.S=function(a,b){var c=new w(a,b);c.J();this.ya.set(a,c)};y.prototype.addInstruction=y.prototype.S;y.prototype.Sb=function(a,b){Da.hasOwnProperty(a)&&this.S(b||a,Da[a])};y.prototype.addNativeInstruction=y.prototype.Sb;y.prototype.H=function(){return this.K};y.prototype.getQuota=y.prototype.H;y.prototype.Va=function(){this.K=oa();this.ya.K=this.K};y.prototype.resetQuota=y.prototype.Va;
y.prototype.ne=function(){this.Z=na();this.ya.Z=this.Z};y.prototype.resetPermissions=y.prototype.ne;y.prototype.N=function(a,b){var c=Array.prototype.slice.call(arguments,0);return this.wb(c)};y.prototype.execute=y.prototype.N;y.prototype.wb=function(a){for(var b,c=0;c<arguments.length;c++){var d=ta(this.ya,arguments[c]);b=d instanceof g||d instanceof w||d instanceof v||d instanceof va||null===d||void 0===d||"string"===typeof d||"number"===typeof d||"boolean"===typeof d?d:void 0}return b};
y.prototype.run=y.prototype.wb;y.prototype.J=function(){this.ya.J()};y.prototype.makeImmutable=y.prototype.J;var Ea=function(a){for(var b=[],c=0;c<a.length();c++)a.has(c)&&(b[c]=a.get(c));return b};var Fa={we:"concat every filter forEach hasOwnProperty indexOf join lastIndexOf map pop push reduce reduceRight reverse shift slice some sort splice unshift toString".split(" "),concat:function(a,b){for(var c=[],d=0;d<this.length();d++)c.push(this.get(d));for(d=1;d<arguments.length;d++)if(arguments[d]instanceof v)for(var e=arguments[d],f=0;f<e.length();f++)c.push(e.get(f));else c.push(arguments[d]);return new v(c)},every:function(a,b){for(var c=this.length(),d=0;d<this.length()&&d<c;d++)if(this.has(d)&&
!b.m(a,this.get(d),d,this))return!1;return!0},filter:function(a,b){for(var c=this.length(),d=[],e=0;e<this.length()&&e<c;e++)this.has(e)&&b.m(a,this.get(e),e,this)&&d.push(this.get(e));return new v(d)},forEach:function(a,b){for(var c=this.length(),d=0;d<this.length()&&d<c;d++)this.has(d)&&b.m(a,this.get(d),d,this)},hasOwnProperty:function(a,b){return this.has(b)},indexOf:function(a,b,c){var d=this.length(),e=void 0===c?0:Number(c);0>e&&(e=Math.max(d+e,0));for(var f=e;f<d;f++)if(this.has(f)&&this.get(f)===
b)return f;return-1},join:function(a,b){for(var c=[],d=0;d<this.length();d++)c.push(this.get(d));return c.join(b)},lastIndexOf:function(a,b,c){var d=this.length(),e=d-1;void 0!==c&&(e=0>c?d+c:Math.min(c,e));for(var f=e;0<=f;f--)if(this.has(f)&&this.get(f)===b)return f;return-1},map:function(a,b){for(var c=this.length(),d=[],e=0;e<this.length()&&e<c;e++)this.has(e)&&(d[e]=b.m(a,this.get(e),e,this));return new v(d)},pop:function(){return this.pop()},push:function(a,b){return this.push.apply(this,Array.prototype.slice.call(arguments,
1))},reduce:function(a,b,c){var d=this.length(),e,f;if(void 0!==c)e=c,f=0;else{if(0==d)throw"TypeError: Reduce on List with no elements.";for(var h=0;h<d;h++)if(this.has(h)){e=this.get(h);f=h+1;break}if(h==d)throw"TypeError: Reduce on List with no elements.";}for(h=f;h<d;h++)this.has(h)&&(e=b.m(a,e,this.get(h),h,this));return e},reduceRight:function(a,b,c){var d=this.length(),e,f;if(void 0!==c)e=c,f=d-1;else{if(0==d)throw"TypeError: ReduceRight on List with no elements.";for(var h=1;h<=d;h++)if(this.has(d-
h)){e=this.get(d-h);f=d-(h+1);break}if(h>d)throw"TypeError: ReduceRight on List with no elements.";}for(h=f;0<=h;h--)this.has(h)&&(e=b.m(a,e,this.get(h),h,this));return e},reverse:function(){for(var a=Ea(this),b=a.length-1,c=0;0<=b;b--,c++)a.hasOwnProperty(b)?this.set(c,a[b]):this.remove(c);return this},shift:function(){return this.shift()},slice:function(a,b,c){var d=this.length();void 0===b&&(b=0);b=0>b?Math.max(d+b,0):Math.min(b,d);c=void 0===c?d:0>c?Math.max(d+c,0):Math.min(c,d);c=Math.max(b,
c);for(var e=[],f=b;f<c;f++)e.push(this.get(f));return new v(e)},some:function(a,b){for(var c=this.length(),d=0;d<this.length()&&d<c;d++)if(this.has(d)&&b.m(a,this.get(d),d,this))return!0;return!1},sort:function(a,b){var c=Ea(this);void 0===b?c.sort():c.sort(function(c,d){return Number(b.m(a,c,d))});for(var d=0;d<c.length;d++)c.hasOwnProperty(d)?this.set(d,c[d]):this.remove(d)},splice:function(a,b,c,d){return this.splice.apply(this,Array.prototype.splice.call(arguments,1,arguments.length-1))},toString:function(){return this.toString()},
unshift:function(a,b){return this.unshift.apply(this,Array.prototype.slice.call(arguments,1))}};var z={fc:{ADD:0,AND:1,APPLY:2,ASSIGN:3,BREAK:4,CASE:5,CONTINUE:6,CONTROL:49,CREATE_ARRAY:7,CREATE_OBJECT:8,DEFAULT:9,DEFN:50,DIVIDE:10,DO:11,EQUALS:12,EXPRESSION_LIST:13,FN:51,FOR:14,FOR_IN:47,GET:15,GET_CONTAINER_VARIABLE:48,GET_INDEX:16,GET_PROPERTY:17,GREATER_THAN:18,GREATER_THAN_EQUALS:19,IDENTITY_EQUALS:20,IDENTITY_NOT_EQUALS:21,IF:22,LESS_THAN:23,LESS_THAN_EQUALS:24,MODULUS:25,MULTIPLY:26,NEGATE:27,NOT:28,NOT_EQUALS:29,NULL:45,OR:30,PLUS_EQUALS:31,POST_DECREMENT:32,POST_INCREMENT:33,PRE_DECREMENT:34,
PRE_INCREMENT:35,QUOTE:46,RETURN:36,SET_PROPERTY:43,SUBTRACT:37,SWITCH:38,TERNARY:39,TYPEOF:40,UNDEFINED:44,VAR:41,WHILE:42}},Ga="charAt concat indexOf lastIndexOf match replace search slice split substring toLowerCase toLocaleLowerCase toString toUpperCase toLocaleUpperCase trim".split(" "),Ha=new g("break"),Ia=new g("continue");z.add=function(a,b){return this.evaluate(a)+this.evaluate(b)};z.and=function(a,b){return this.evaluate(a)&&this.evaluate(b)};
z.apply=function(a,b,c){a=this.evaluate(a);b=this.evaluate(b);c=this.evaluate(c);if(!(c instanceof v))throw"Error: Non-List argument given to Apply instruction.";if(null===a||void 0===a)throw"TypeError: Can't read property "+b+" of "+a+".";if("boolean"==typeof a||"number"==typeof a){if("toString"==b)return a.toString();throw"TypeError: "+a+"."+b+" is not a function.";}if("string"==typeof a){if(0<=ra(Ga,b))return Ca(a[b].apply(a,Ea(c)));throw"TypeError: "+b+" is not a function";}if(a instanceof v){if(a.has(b)){var d=
a.get(b);if(d instanceof w){var e=Ea(c);e.unshift(this.B());return d.m.apply(d,e)}throw"TypeError: "+b+" is not a function";}if(0<=ra(Fa.we,b))return e=Ea(c),e.unshift(this.B()),Fa[b].apply(a,e)}if(a instanceof w||a instanceof va){if(a.has(b)){d=a.get(b);if(d instanceof w)return e=Ea(c),e.unshift(this.B()),d.m.apply(d,e);throw"TypeError: "+b+" is not a function";}if("toString"==b)return a instanceof w?a.getName():a.toString();if("hasOwnProperty"==b)return a.has.apply(a,Ea(c))}throw"TypeError: Object has no '"+
b+"' property.";};z.assign=function(a,b){a=this.evaluate(a);if("string"!=typeof a)throw"Invalid key name given for assignment.";var c=this.B();if(!c.has(a))throw"Attempting to assign to undefined value "+b;var d=this.evaluate(b);c.set(a,d);return d};z["break"]=function(){return Ha};z["case"]=function(a){for(var b=this.evaluate(a),c=0;c<b.length;c++){var d=this.evaluate(b[c]);if(d instanceof g)return d}};z["continue"]=function(){return Ia};
z.nd=function(a,b,c){var d=new v;b=this.evaluate(b);for(var e=0;e<b.length;e++)d.push(b[e]);var f=[z.fc.FN,a,d].concat(Array.prototype.splice.call(arguments,2,arguments.length-2));this.B().set(a,this.evaluate(f))};z.qd=function(a,b){return this.evaluate(a)/this.evaluate(b)};z.td=function(a,b){return this.evaluate(a)==this.evaluate(b)};z.ud=function(a){for(var b,c=0;c<arguments.length;c++)b=this.evaluate(arguments[c]);return b};
z.xd=function(a,b,c){a=this.evaluate(a);b=this.evaluate(b);c=this.evaluate(c);var d=this.B();if("string"==typeof b)for(var e=0;e<b.length;e++){d.set(a,e);var f=this.wa(c);if(f instanceof g){if("break"==f.w)break;if("return"==f.w)return f}}else if(b instanceof va||b instanceof v||b instanceof w){var h=b.P(),k=h.length();for(e=0;e<k;e++)if(d.set(a,h.get(e)),f=this.wa(c),f instanceof g){if("break"==f.w)break;if("return"==f.w)return f}}};z.get=function(a){return this.B().get(this.evaluate(a))};
z.cc=function(a,b){var c;a=this.evaluate(a);b=this.evaluate(b);if(void 0===a||null===a)throw"TypeError: cannot access property of "+a+".";a instanceof va||a instanceof v||a instanceof w?c=a.get(b):"string"==typeof a&&("length"==b?c=a.length:ka(b)&&(c=a[b]));return c};z.Ad=function(a,b){return this.evaluate(a)>this.evaluate(b)};z.Bd=function(a,b){return this.evaluate(a)>=this.evaluate(b)};z.Fd=function(a,b){return this.evaluate(a)===this.evaluate(b)};z.Gd=function(a,b){return this.evaluate(a)!==this.evaluate(b)};
z["if"]=function(a,b,c){var d=[];this.evaluate(a)?d=this.evaluate(b):c&&(d=this.evaluate(c));var e=this.wa(d);if(e instanceof g)return e};z.Od=function(a,b){return this.evaluate(a)<this.evaluate(b)};z.Pd=function(a,b){return this.evaluate(a)<=this.evaluate(b)};z.Rd=function(a,b){return this.evaluate(a)%this.evaluate(b)};z.multiply=function(a,b){return this.evaluate(a)*this.evaluate(b)};z.Sd=function(a){return-this.evaluate(a)};z.Td=function(a){return!this.evaluate(a)};
z.Ud=function(a,b){return this.evaluate(a)!=this.evaluate(b)};z["null"]=function(){return null};z.or=function(a,b){return this.evaluate(a)||this.evaluate(b)};z.sc=function(a,b){var c=this.evaluate(a);this.evaluate(b);return c};z.uc=function(a){return this.evaluate(a)};z.quote=function(a){return Array.prototype.slice.apply(arguments)};z["return"]=function(a){return new g("return",this.evaluate(a))};
z.setProperty=function(a,b,c){a=this.evaluate(a);b=this.evaluate(b);c=this.evaluate(c);if(null===a||void 0===a)throw"TypeError: Can't set property "+b+" of "+a+".";(a instanceof w||a instanceof v||a instanceof va)&&a.set(b,c);return c};z.ve=function(a,b){return this.evaluate(a)-this.evaluate(b)};
z["switch"]=function(a,b,c){a=this.evaluate(a);b=this.evaluate(b);c=this.evaluate(c);if(!qa(b)||!qa(c))throw"Error: Malformed switch instruction.";for(var d,e=!1,f=0;f<b.length;f++)if(e||a===this.evaluate(b[f]))if(d=this.evaluate(c[f]),d instanceof g){var h=d.w;if("break"==h)return;if("return"==h||"continue"==h)return d}else e=!0;if(c.length==b.length+1&&(d=this.evaluate(c[c.length-1]),d instanceof g&&("return"==d.w||"continue"==d.w)))return d};
z.xe=function(a,b,c){return this.evaluate(a)?this.evaluate(b):this.evaluate(c)};z["typeof"]=function(a){a=this.evaluate(a);return a instanceof w?"function":typeof a};z.undefined=function(){};z["var"]=function(a){for(var b=this.B(),c=0;c<arguments.length;c++){var d=arguments[c];"string"!=typeof d||b.add(d,void 0)}};
z["while"]=function(a,b,c,d){var e,f=this.evaluate(d);if(this.evaluate(c)&&(e=this.wa(f),e instanceof g)){if("break"==e.w)return;if("return"==e.w)return e}for(;this.evaluate(a);){e=this.wa(f);if(e instanceof g){if("break"==e.w)break;if("return"==e.w)return e}this.evaluate(b)}};var Ka=function(){this.ec=!1;this.U=new y;Ja(this);this.ec=!0};Ka.prototype.Ld=function(){return this.ec};Ka.prototype.isInitialized=Ka.prototype.Ld;Ka.prototype.N=function(a){return this.U.wb(a)};Ka.prototype.execute=Ka.prototype.N;Ka.prototype.J=function(){this.U.J()};Ka.prototype.makeImmutable=Ka.prototype.J;
var Ja=function(a){function b(a,b){e.U.Sb(a,String(b))}function c(a,b){e.U.S(String(d[a]),b)}var d=z.fc,e=a;b("control",d.CONTROL);b("fn",d.FN);b("list",d.CREATE_ARRAY);b("map",d.CREATE_OBJECT);b("undefined",d.UNDEFINED);c("ADD",z.add);c("AND",z.and);c("APPLY",z.apply);c("ASSIGN",z.assign);c("BREAK",z["break"]);c("CASE",z["case"]);c("CONTINUE",z["continue"]);c("DEFAULT",z["case"]);c("DEFN",z.nd);c("DIVIDE",z.qd);c("EQUALS",z.td);c("EXPRESSION_LIST",z.ud);c("FOR_IN",z.xd);c("GET",z.get);c("GET_INDEX",
z.cc);c("GET_PROPERTY",z.cc);c("GREATER_THAN",z.Ad);c("GREATER_THAN_EQUALS",z.Bd);c("IDENTITY_EQUALS",z.Fd);c("IDENTITY_NOT_EQUALS",z.Gd);c("IF",z["if"]);c("LESS_THAN",z.Od);c("LESS_THAN_EQUALS",z.Pd);c("MODULUS",z.Rd);c("MULTIPLY",z.multiply);c("NEGATE",z.Sd);c("NOT",z.Td);c("NOT_EQUALS",z.Ud);c("NULL",z["null"]);c("OR",z.or);c("POST_DECREMENT",z.sc);c("POST_INCREMENT",z.sc);c("PRE_DECREMENT",z.uc);c("PRE_INCREMENT",z.uc);c("QUOTE",z.quote);c("RETURN",z["return"]);c("SET_PROPERTY",z.setProperty);
c("SUBTRACT",z.ve);c("SWITCH",z["switch"]);c("TERNARY",z.xe);c("TYPEOF",z["typeof"]);c("VAR",z["var"]);c("WHILE",z["while"])};Ka.prototype.S=function(a,b){this.U.S(a,b)};Ka.prototype.addInstruction=Ka.prototype.S;Ka.prototype.H=function(){return this.U.H()};Ka.prototype.getQuota=Ka.prototype.H;Ka.prototype.Va=function(){this.U.Va()};Ka.prototype.resetQuota=Ka.prototype.Va;var La=function(){this.Ra={}};La.prototype.get=function(a){return this.Ra.hasOwnProperty(a)?this.Ra[a]:void 0};La.prototype.add=function(a,b){if(this.Ra.hasOwnProperty(a))throw"Attempting to add a function which already exists: "+a+".";var c=new w(a,function(){for(var a=Array.prototype.slice.call(arguments,0),c=0;c<a.length;c++)a[c]=this.evaluate(a[c]);return b.apply(this,a)});c.J();this.Ra[a]=c};La.prototype.addAll=function(a){for(var b in a)a.hasOwnProperty(b)&&this.add(b,a[b])};var C=window,D=document,Ma=navigator,Na=function(a,b){var c=C[a];C[a]=void 0===c?b:c;return C[a]},Oa=function(a,b){b&&(a.addEventListener?a.onload=b:a.onreadystatechange=function(){a.readyState in{loaded:1,complete:1}&&(a.onreadystatechange=null,b())})},G=function(a,b,c){var d=D.createElement("script");d.type="text/javascript";d.async=!0;d.src=a;Oa(d,b);c&&(d.onerror=c);fa()&&d.setAttribute("nonce",fa());var e=D.getElementsByTagName("script")[0]||D.body||D.head;e.parentNode.insertBefore(d,e);return d},
Pa=function(a,b){var c=D.createElement("iframe");c.height="0";c.width="0";c.style.display="none";c.style.visibility="hidden";var d=D.body&&D.body.lastChild||D.body||D.head;d.parentNode.insertBefore(c,d);Oa(c,b);void 0!==a&&(c.src=a);return c},K=function(a,b,c){var d=new Image(1,1);d.onload=function(){d.onload=null;b&&b()};d.onerror=function(){d.onerror=null;c&&c()};d.src=a},Qa=function(a,b,c,d){a.addEventListener?a.addEventListener(b,c,!!d):a.attachEvent&&a.attachEvent("on"+b,c)},Ra=function(a,b,
c){a.removeEventListener?a.removeEventListener(b,c,!1):a.detachEvent&&a.detachEvent("on"+b,c)},N=function(a){C.setTimeout(a,0)},Ta=function(a){var b=D.getElementById(a);if(b&&Sa(b,"id")!=a)for(var c=1;c<document.all[a].length;c++)if(Sa(document.all[a][c],"id")==a)return document.all[a][c];return b},Sa=function(a,b){return a&&b&&a.attributes&&a.attributes[b]?a.attributes[b].value:null},Ua=function(a){var b=a.innerText||a.textContent||"";b&&" "!=b&&(b=b.replace(/^[\s\xa0]+|[\s\xa0]+$/g,""));b&&(b=b.replace(/(\xa0+|\s{2,}|\n|\r\t)/g,
" "));return b},Va=function(a){var b=D.createElement("div");b.innerHTML="A<div>"+a+"</div>";b=b.lastChild;for(var c=[];b.firstChild;)c.push(b.removeChild(b.firstChild));return c},Wa=function(a){Ma.sendBeacon&&Ma.sendBeacon(a)||K(a)};var Xa=function(a,b){for(var c=a.split("&"),d=0;d<c.length;d++){var e=c[d].split("=");if(decodeURIComponent(e[0]).replace(/\+/g," ")==b)return decodeURIComponent(e.slice(1).join("=")).replace(/\+/g," ")}},P=function(a,b,c,d,e){var f,h=function(a){return a?a.replace(":","").toLowerCase():""},k=h(a.protocol)||h(C.location.protocol);b&&(b=String(b).toLowerCase());switch(b){case "protocol":f=k;break;case "host":f=(a.hostname||C.location.hostname).split(":")[0].toLowerCase();if(c){var l=/^www\d*\./.exec(f);
l&&l[0]&&(f=f.substr(l[0].length))}break;case "port":f=String(1*(a.hostname?a.port:C.location.port)||("http"==k?80:"https"==k?443:""));break;case "path":f="/"==a.pathname.substr(0,1)?a.pathname:"/"+a.pathname;var m=f.split("/");0<=ra(d||[],m[m.length-1])&&(m[m.length-1]="");f=m.join("/");break;case "query":f=a.search.replace("?","");e&&(f=Xa(f,e));break;case "extension":var n=a.pathname.split(".");f=1<n.length?n[n.length-1]:"";f=f.split("/")[0];break;case "fragment":f=a.hash.replace("#","");break;
default:f=a&&a.href}return f},Ya=function(a){var b="";a&&a.href&&(b=a.hash?a.href.replace(a.hash,""):a.href);return b},Q=function(a){var b=D.createElement("a");a&&(b.href=a);return b};var ab=function(){this.qc=new Ka;var a=new La;a.addAll(Za());$a(this,function(b){return a.get(b)})},Za=function(){return{callInWindow:bb,getCurrentUrl:cb,getInWindow:eb,getReferrer:fb,getUrlComponent:gb,getUrlFragment:hb,isPlainObject:ib,loadIframe:jb,loadJavaScript:kb,removeUrlFragment:mb,replaceAll:nb,sendTrackingBeacon:ob,setInWindow:pb}};ab.prototype.N=function(a){return this.qc.N(a)};ab.prototype.execute=ab.prototype.N;var $a=function(a,b){a.qc.S("require",b)};
function bb(a,b){for(var c=a.split("."),d=C,e=d[c[0]],f=1;e&&f<c.length;f++)d=e,e=e[c[f]];if("function"==xa(e)){var h=[];for(f=1;f<arguments.length;f++)h.push(Aa(arguments[f]));e.apply(d,h)}}function cb(){return C.location.href}function eb(a,b,c){for(var d=a.split("."),e=C,f=0;f<d.length-1;f++)if(e=e[d[f]],void 0===e||null===e)return;b&&(void 0===e[d[f]]||c&&!e[d[f]])&&(e[d[f]]=Aa(b));return Ca(e[d[f]])}function fb(){return D.referrer}
function gb(a,b,c,d,e){var f;if(d&&d instanceof v){f=[];for(var h=0;h<d.length();h++){var k=d.get(h);"string"==typeof k&&f.push(k)}}return P(Q(a),b,c,f,e)}function hb(a){return P(Q(a),"fragment")}function ib(a){return a instanceof va}function jb(a,b){var c=this.B();Pa(a,function(){b instanceof w&&b.m(c)})}var qb={};
function kb(a,b,c,d){var e=this.B(),f=function(){b instanceof w&&b.m(e)},h=function(){c instanceof w&&c.m(e)};d?qb[d]?(qb[d].onSuccess.push(f),qb[d].onFailure.push(h)):(qb[d]={onSuccess:[f],onFailure:[h]},f=function(){for(var a=qb[d].onSuccess,b=0;b<a.length;b++)N(a[b]);a.push=function(a){N(a);return 0}},h=function(){for(var a=qb[d].onFailure,b=0;b<a.length;b++)N(a[b]);qb[d]=null},G(a,f,h)):G(a,f,h)}function mb(a){return Ya(Q(a))}function nb(a,b,c){return a.replace(new RegExp(b,"g"),c)}
function ob(a,b,c){var d=this.B();K(a,function(){b instanceof w&&b.m(d)},function(){c instanceof w&&c.m(d)})}function pb(a,b,c){for(var d=a.split("."),e=C,f=0;f<d.length-1;f++)if(e=e[d[f]],void 0===e)return!1;return void 0===e[d[f]]||c?(e[d[f]]=Aa(b),!0):!1};
var rb=[],sb={"\x00":"&#0;",'"':"&quot;","&":"&amp;","'":"&#39;","<":"&lt;",">":"&gt;","\t":"&#9;","\n":"&#10;","\x0B":"&#11;","\f":"&#12;","\r":"&#13;"," ":"&#32;","-":"&#45;","/":"&#47;","=":"&#61;","`":"&#96;","\u0085":"&#133;","\u00a0":"&#160;","\u2028":"&#8232;","\u2029":"&#8233;"},tb=function(a){return sb[a]},ub=/[\x00\x22\x26\x27\x3c\x3e]/g;var yb=/[\x00\x08-\x0d\x22\x26\x27\/\x3c-\x3e\\\x85\u2028\u2029]/g,zb={"\x00":"\\x00","\b":"\\x08","\t":"\\t","\n":"\\n","\x0B":"\\x0b",
"\f":"\\f","\r":"\\r",'"':"\\x22","&":"\\x26","'":"\\x27","/":"\\/","<":"\\x3c","=":"\\x3d",">":"\\x3e","\\":"\\\\","\u0085":"\\x85","\u2028":"\\u2028","\u2029":"\\u2029",$:"\\x24","(":"\\x28",")":"\\x29","*":"\\x2a","+":"\\x2b",",":"\\x2c","-":"\\x2d",".":"\\x2e",":":"\\x3a","?":"\\x3f","[":"\\x5b","]":"\\x5d","^":"\\x5e","{":"\\x7b","|":"\\x7c","}":"\\x7d"},Cb=function(a){return zb[a]};
rb[8]=function(a){if(null==a)return" null ";switch(typeof a){case "boolean":case "number":return" "+a+" ";default:return"'"+String(String(a)).replace(yb,Cb)+"'"}};var Kb=/[\x00- \x22\x27-\x29\x3c\x3e\\\x7b\x7d\x7f\x85\xa0\u2028\u2029\uff01\uff03\uff04\uff06-\uff0c\uff0f\uff1a\uff1b\uff1d\uff1f\uff20\uff3b\uff3d]/g,Lb={"\x00":"%00","\u0001":"%01","\u0002":"%02","\u0003":"%03","\u0004":"%04","\u0005":"%05","\u0006":"%06","\u0007":"%07","\b":"%08","\t":"%09","\n":"%0A","\x0B":"%0B","\f":"%0C","\r":"%0D","\u000e":"%0E","\u000f":"%0F","\u0010":"%10",
"\u0011":"%11","\u0012":"%12","\u0013":"%13","\u0014":"%14","\u0015":"%15","\u0016":"%16","\u0017":"%17","\u0018":"%18","\u0019":"%19","\u001a":"%1A","\u001b":"%1B","\u001c":"%1C","\u001d":"%1D","\u001e":"%1E","\u001f":"%1F"," ":"%20",'"':"%22","'":"%27","(":"%28",")":"%29","<":"%3C",">":"%3E","\\":"%5C","{":"%7B","}":"%7D","\u007f":"%7F","\u0085":"%C2%85","\u00a0":"%C2%A0","\u2028":"%E2%80%A8","\u2029":"%E2%80%A9","\uff01":"%EF%BC%81","\uff03":"%EF%BC%83","\uff04":"%EF%BC%84","\uff06":"%EF%BC%86",
"\uff07":"%EF%BC%87","\uff08":"%EF%BC%88","\uff09":"%EF%BC%89","\uff0a":"%EF%BC%8A","\uff0b":"%EF%BC%8B","\uff0c":"%EF%BC%8C","\uff0f":"%EF%BC%8F","\uff1a":"%EF%BC%9A","\uff1b":"%EF%BC%9B","\uff1d":"%EF%BC%9D","\uff1f":"%EF%BC%9F","\uff20":"%EF%BC%A0","\uff3b":"%EF%BC%BB","\uff3d":"%EF%BC%BD"},Mb=function(a){return Lb[a]};rb[16]=function(a){return a};var Ob,Pb=[],Qb=[],Rb=[],Sb=[],Tb=[],Ub={},Vb,Wb,Xb,Yb=function(a){var b=a["function"];if(!b)throw"Error: No function name given for function call.";var c=!!Ub[b],d={},e;for(e in a)a.hasOwnProperty(e)&&0===e.indexOf("vtp_")&&(d[c?e:e.substr(4)]=a[e]);return c?Ub[b](d):Ob(b,d)},cc=function(a,b,c){c=c||[];var d={},e;for(e in a)a.hasOwnProperty(e)&&(d[e]=bc(a[e],b,c));return d},bc=function(a,b,c){if(qa(a)){var d;switch(a[0]){case "function_id":return a[1];case "list":d=[];for(var e=1;e<a.length;e++)d.push(bc(a[e],
b,c));return d;case "macro":var f=a[1];if(c[f])return;var h=Pb[f];if(!h||b(h))return;c[f]=!0;try{var k=cc(h,b,c);d=Yb(k);Xb&&(d=Xb.hd(d,k))}catch(t){d=!1}c[f]=!1;return d;case "map":d={};for(var l=1;l<a.length;l+=2)d[bc(a[l],b,c)]=bc(a[l+1],b,c);return d;case "template":d=[];for(var m=!1,n=1;n<a.length;n++){var p=bc(a[n],b,c);Wb&&(m=m||p===Wb.Ia);d.push(p)}return Wb&&m?Wb.jd(d):d.join("");case "escape":d=bc(a[1],b,c);if(Wb&&qa(a[1])&&"macro"===a[1][0]&&Wb.Md(a))return Wb.ae(d);d=String(d);for(var q=
2;q<a.length;q++)rb[a[q]]&&(d=rb[a[q]](d));return d;case "tag":var r=a[1];if(!Sb[r])throw Error("Unable to resolve tag reference "+r+".");return d={Zb:a[2],index:r};case "zb":var u=dc({"function":a[1],arg0:a[2],arg1:a[3],ignore_case:a[5]},b,c);a[4]&&(u=!u);return u;default:throw Error("Attempting to expand unknown Value type: "+a[0]+".");}}return a},dc=function(a,b,c){try{return Vb(cc(a,b,c))}catch(d){JSON.stringify(a)}return null};var ec=null,hc=function(a){function b(a){for(var b=0;b<a.length;b++)d[a[b]]=!0}var c=[],d=[];ec=fc(a);for(var e=0;e<Qb.length;e++){var f=Qb[e],h=gc(f);if(h){for(var k=f.add||[],l=0;l<k.length;l++)c[k[l]]=!0;b(f.block||[])}else null===h&&b(f.block||[])}var m=[];for(e=0;e<Sb.length;e++)c[e]&&!d[e]&&(m[e]=!0);return m},gc=function(a){for(var b=a["if"]||[],c=0;c<b.length;c++){var d=ec(b[c]);if(!d)return null===d?null:!1}var e=a.unless||[];for(c=0;c<e.length;c++){d=ec(e[c]);if(null===d)return null;if(d)return!1}return!0};
var fc=function(a){var b=[];return function(c){void 0===b[c]&&(b[c]=dc(Rb[c],a));return b[c]}};/*
 Copyright (c) 2014 Derek Brans, MIT license https://github.com/krux/postscribe/blob/master/LICENSE. Portions derived from simplehtmlparser, which is licensed under the Apache License, Version 2.0 */

var ic,jc=function(){};(function(){function a(a,h){a=a||"";h=h||{};for(var k in b)b.hasOwnProperty(k)&&(h.Rc&&(h["fix_"+k]=!0),h.$b=h.$b||h["fix_"+k]);var l={comment:/^\x3c!--/,endTag:/^<\//,atomicTag:/^<\s*(script|style|noscript|iframe|textarea)[\s\/>]/i,startTag:/^</,chars:/^[^<]/},p={comment:function(){var b=a.indexOf("--\x3e");if(0<=b)return{content:a.substr(4,b),length:b+3}},endTag:function(){var b=a.match(d);if(b)return{tagName:b[1],length:b[0].length}},atomicTag:function(){var b=p.startTag();
if(b){var c=a.slice(b.length);if(c.match(new RegExp("</\\s*"+b.tagName+"\\s*>","i"))){var d=c.match(new RegExp("([\\s\\S]*?)</\\s*"+b.tagName+"\\s*>","i"));if(d)return{tagName:b.tagName,A:b.A,content:d[1],length:d[0].length+b.length}}}},startTag:function(){var b=a.match(c);if(b){var d={};b[2].replace(e,function(a,b,c,e,h){var k=c||e||h||f.test(b)&&b||null,l=document.createElement("div");l.innerHTML=k;d[b]=l.textContent||l.innerText||k});return{tagName:b[1],A:d,Ga:!!b[3],length:b[0].length}}},chars:function(){var b=
a.indexOf("<");return{length:0<=b?b:a.length}}},q=function(){for(var b in l)if(l[b].test(a)){var c=p[b]();return c?(c.type=c.type||b,c.text=a.substr(0,c.length),a=a.slice(c.length),c):null}};h.$b&&function(){var b=/^(AREA|BASE|BASEFONT|BR|COL|FRAME|HR|IMG|INPUT|ISINDEX|LINK|META|PARAM|EMBED)$/i,c=/^(COLGROUP|DD|DT|LI|OPTIONS|P|TD|TFOOT|TH|THEAD|TR)$/i,d=[];d.ic=function(){return this[this.length-1]};d.ob=function(a){var b=this.ic();return b&&b.tagName&&b.tagName.toUpperCase()===a.toUpperCase()};d.gd=
function(a){for(var b=0,c;c=this[b];b++)if(c.tagName===a)return!0;return!1};var e=function(a){a&&"startTag"===a.type&&(a.Ga=b.test(a.tagName)||a.Ga);return a},f=q,k=function(){a="</"+d.pop().tagName+">"+a},l={startTag:function(b){var e=b.tagName;"TR"===e.toUpperCase()&&d.ob("TABLE")?(a="<TBODY>"+a,m()):h.Ne&&c.test(e)&&d.gd(e)?d.ob(e)?k():(a="</"+b.tagName+">"+a,m()):b.Ga||d.push(b)},endTag:function(a){d.ic()?h.vd&&!d.ob(a.tagName)?k():d.pop():h.vd&&(f(),m())}},m=function(){var b=a,c=e(f());a=b;if(c&&
l[c.type])l[c.type](c)};q=function(){m();return e(f())}}();return{append:function(b){a+=b},fe:q,Ue:function(a){for(var b;(b=q())&&(!a[b.type]||!1!==a[b.type](b)););},clear:function(){var b=a;a="";return b},Ve:function(){return a},stack:[]}}var b=function(){var a={},b=this.document.createElement("div");b.innerHTML="<P><I></P></I>";a.af="<P><I></P></I>"!==b.innerHTML;b.innerHTML="<P><i><P></P></i></P>";a.Ye=2===b.childNodes.length;return a}(),c=/^<([\-A-Za-z0-9_]+)((?:\s+[\w\-]+(?:\s*=?\s*(?:(?:"[^"]*")|(?:'[^']*')|[^>\s]+))?)*)\s*(\/?)>/,
d=/^<\/([\-A-Za-z0-9_]+)[^>]*>/,e=/([\-A-Za-z0-9_]+)(?:\s*=\s*(?:(?:"((?:\\.|[^"])*)")|(?:'((?:\\.|[^'])*)')|([^>\s]+)))?/g,f=/^(checked|compact|declare|defer|disabled|ismap|multiple|nohref|noresize|noshade|nowrap|readonly|selected)$/i;a.supports=b;a.bf=function(a){var b={comment:function(a){return"<--"+a.content+"--\x3e"},endTag:function(a){return"</"+a.tagName+">"},atomicTag:function(a){return b.startTag(a)+a.content+b.endTag(a)},startTag:function(a){var b="<"+a.tagName,c;for(c in a.A){var d=a.A[c];
b+=" "+c+'="'+(d?d.replace(/(^|[^\\])"/g,'$1\\"'):"")+'"'}return b+(a.Ga?"/>":">")},chars:function(a){return a.text}};return b[a.type](a)};a.Me=function(a){var b={},c;for(c in a){var d=a[c];b[c]=d&&d.replace(/(^|[^\\])"/g,'$1\\"')}return b};for(var h in b)a.Wc=a.Wc||!b[h]&&h;ic=a})();(function(){function a(){}function b(a){return void 0!==a&&null!==a}function c(a,b,c){var d,e=a&&a.length||0;for(d=0;d<e;d++)b.call(c,a[d],d)}function d(a,b,c){for(var d in a)a.hasOwnProperty(d)&&b.call(c,d,a[d])}function e(a,
b){d(b,function(b,c){a[b]=c});return a}function f(a,c){a=a||{};d(c,function(c,d){b(a[c])||(a[c]=d)});return a}function h(a){try{return m.call(a)}catch(r){var b=[];c(a,function(a){b.push(a)});return b}}var k={Jc:a,Kc:a,Lc:a,Mc:a,Sc:a,Tc:function(a){return a},done:a,error:function(a){throw a;},ke:!1},l=this;if(!l.postscribe){var m=Array.prototype.slice,n=function(){function a(a,c,d){var e="data-ps-"+c;if(2===arguments.length){var f=a.getAttribute(e);return b(f)?String(f):f}b(d)&&""!==d?a.setAttribute(e,
d):a.removeAttribute(e)}function f(b,c){var d=b.ownerDocument;e(this,{root:b,options:c,Ha:d.defaultView||d.parentWindow,ha:d,Ua:ic("",{Rc:!0}),eb:[b],ub:"",vb:d.createElement(b.nodeName),Ea:[],ca:[]});a(this.vb,"proxyof",0)}f.prototype.write=function(){[].push.apply(this.ca,arguments);for(var a;!this.Pa&&this.ca.length;)a=this.ca.shift(),"function"===typeof a?this.$c(a):this.Eb(a)};f.prototype.$c=function(a){var b={type:"function",value:a.name||a.toString()};this.rb(b);a.call(this.Ha,this.ha);this.mc(b)};
f.prototype.Eb=function(a){this.Ua.append(a);for(var b,c=[],d,e;(b=this.Ua.fe())&&!(d=b&&"tagName"in b?!!~b.tagName.toLowerCase().indexOf("script"):!1)&&!(e=b&&"tagName"in b?!!~b.tagName.toLowerCase().indexOf("style"):!1);)c.push(b);this.Ce(c);d&&this.Cd(b);e&&this.Dd(b)};f.prototype.Ce=function(a){var b=this.Xc(a);b.Rb&&(b.kb=this.ub+b.Rb,this.ub+=b.ee,this.vb.innerHTML=b.kb,this.Ae())};f.prototype.Xc=function(a){var b=this.eb.length,d=[],e=[],f=[];c(a,function(a){d.push(a.text);if(a.A){if(!/^noscript$/i.test(a.tagName)){var c=
b++;e.push(a.text.replace(/(\/?>)/," data-ps-id="+c+" $1"));"ps-script"!==a.A.id&&"ps-style"!==a.A.id&&f.push("atomicTag"===a.type?"":"<"+a.tagName+" data-ps-proxyof="+c+(a.Ga?" />":">"))}}else e.push(a.text),f.push("endTag"===a.type?a.text:"")});return{cf:a,raw:d.join(""),Rb:e.join(""),ee:f.join("")}};f.prototype.Ae=function(){for(var c,d=[this.vb];b(c=d.shift());){var e=1===c.nodeType;if(!e||!a(c,"proxyof")){e&&(this.eb[a(c,"id")]=c,a(c,"id",null));var f=c.parentNode&&a(c.parentNode,"proxyof");
f&&this.eb[f].appendChild(c)}d.unshift.apply(d,h(c.childNodes))}};f.prototype.Cd=function(a){var b=this.Ua.clear();b&&this.ca.unshift(b);a.src=a.A.src||a.A.Fe;a.src&&this.Ea.length?this.Pa=a:this.rb(a);var c=this;this.Be(a,function(){c.mc(a)})};f.prototype.Dd=function(a){var b=this.Ua.clear();b&&this.ca.unshift(b);a.type=a.A.type||a.A.Ge||"text/css";this.De(a);b&&this.write()};f.prototype.De=function(a){var b=this.Zc(a);this.Kd(b);a.content&&(b.styleSheet&&!b.sheet?b.styleSheet.cssText=a.content:
b.appendChild(this.ha.createTextNode(a.content)))};f.prototype.Zc=function(a){var b=this.ha.createElement(a.tagName);b.setAttribute("type",a.type);d(a.A,function(a,c){b.setAttribute(a,c)});return b};f.prototype.Kd=function(a){this.Eb('<span id="ps-style"/>');var b=this.ha.getElementById("ps-style");b.parentNode.replaceChild(a,b)};f.prototype.rb=function(a){a.Yd=this.ca;this.ca=[];this.Ea.unshift(a)};f.prototype.mc=function(a){a!==this.Ea[0]?this.options.error({message:"Bad script nesting or script finished twice"}):
(this.Ea.shift(),this.write.apply(this,a.Yd),!this.Ea.length&&this.Pa&&(this.rb(this.Pa),this.Pa=null))};f.prototype.Be=function(a,b){var c=this.Yc(a),d=this.te(c),e=this.options.Jc;a.src&&(c.src=a.src,this.qe(c,d?e:function(){b();e()}));try{this.Jd(c),a.src&&!d||b()}catch(E){this.options.error(E),b()}};f.prototype.Yc=function(a){var b=this.ha.createElement(a.tagName);d(a.A,function(a,c){b.setAttribute(a,c)});a.content&&(b.text=a.content);return b};f.prototype.Jd=function(a){this.Eb('<span id="ps-script"/>');
var b=this.ha.getElementById("ps-script");b.parentNode.replaceChild(a,b)};f.prototype.qe=function(a,b){function c(){a=a.onload=a.onreadystatechange=a.onerror=null}var d=this.options.error;e(a,{onload:function(){c();b()},onreadystatechange:function(){/^(loaded|complete)$/.test(a.readyState)&&(c(),b())},onerror:function(){var e={message:"remote script failed "+a.src};c();d(e);b()}})};f.prototype.te=function(a){return!/^script$/i.test(a.nodeName)||!!(this.options.ke&&a.src&&a.hasAttribute("async"))};
return f}();l.postscribe=function(){function b(){var a=m.shift(),b;a&&(b=a[a.length-1],b.Kc(),a.stream=c.apply(null,a),b.Lc())}function c(c,f,k){function l(a){a=k.Tc(a);t.write(a);k.Mc(a)}t=new n(c,k);t.id=d++;t.name=k.name||t.id;var m=c.ownerDocument,p={close:m.close,open:m.open,write:m.write,writeln:m.writeln};e(m,{close:a,open:a,write:function(){return l(h(arguments).join(""))},writeln:function(){return l(h(arguments).join("")+"\n")}});var q=t.Ha.onerror||a;t.Ha.onerror=function(a,b,c){k.error({Re:a+
" - "+b+":"+c});q.apply(t.Ha,arguments)};t.write(f,function(){e(m,p);t.Ha.onerror=q;k.done();t=null;b()});return t}var d=0,m=[],t=null;return e(function(c,d,e){"function"===typeof e&&(e={done:e});e=f(e,k);c=/^#/.test(c)?l.document.getElementById(c.substr(1)):c.Pe?c[0]:c;var h=[c,d,e];c.$d={cancel:function(){h.stream?h.stream.abort():h[1]=a}};e.Sc(h);m.push(h);t||b();return c.$d},{streams:{},Te:m,He:n})}();jc=l.postscribe}})();var kc={},lc=null;kc.o="GTM-7BF3X";var mc=null,nc="//www.googletagmanager.com/a?id="+kc.o+"&cv=286",oc={},pc={},qc=D.currentScript?D.currentScript.src:void 0;var rc=function(){},sc=function(a){return"function"==typeof a},tc=function(a){return"string"==xa(a)},uc=function(a){return"number"==xa(a)&&!isNaN(a)},vc=function(a){return Math.round(Number(a))||0},wc=function(a){return"false"==String(a).toLowerCase()?!1:!!a},xc=function(a){var b=[];if(qa(a))for(var c=0;c<a.length;c++)b.push(String(a[c]));return b},yc=function(a){return a?a.replace(/^\s+|\s+$/g,""):""},zc=function(a,b){if(!uc(a)||!uc(b)||a>b)a=0,b=2147483647;return Math.floor(Math.random()*(b-a+1)+
a)},Ac=function(){this.prefix="gtm.";this.values={}};Ac.prototype.set=function(a,b){this.values[this.prefix+a]=b};Ac.prototype.get=function(a){return this.values[this.prefix+a]};Ac.prototype.contains=function(a){return void 0!==this.get(a)};var Bc=function(){var a=lc.sequence||0;lc.sequence=a+1;return a},Cc=function(a,b,c){return a&&a.hasOwnProperty(b)?a[b]:c},Dc=function(a){var b=!1;return function(){if(!b)try{a()}catch(c){}b=!0}};var R=function(){var a=function(a){return{toString:function(){return a}}};return{Hb:a("convert_case_to"),Ib:a("convert_false_to"),Jb:a("convert_null_to"),Kb:a("convert_true_to"),Lb:a("convert_undefined_to"),L:a("function"),Ac:a("instance_name"),Bc:a("live_only"),Cc:a("malware_disabled"),Dc:a("once_per_event"),Nb:a("once_per_load"),Ob:a("setup_tags"),Ec:a("tag_id"),Pb:a("teardown_tags")}}();var Ec=new Ac,Fc={},Ic={set:function(a,b){x(Gc(a,b),Fc)},get:function(a){return Hc(a,2)},reset:function(){Ec=new Ac;Fc={}}},Hc=function(a,b){return 2!=b?Ec.get(a):Jc(a)},Jc=function(a,b,c){var d=a.split(".");return Lc(d)},Lc=function(a){for(var b=Fc,c=0;c<a.length;c++){if(null===
b)return!1;if(void 0===b)break;b=b[a[c]]}return b};
var Nc=function(a,b){Ec.set(a,b);x(Gc(a,b),Fc)},Gc=function(a,b){for(var c={},d=c,e=a.split("."),f=0;f<e.length-1;f++)d=d[e[f]]={};d[e[e.length-1]]=b;return c};var Oc=new RegExp(/^(.*\.)?(google|youtube|blogger|withgoogle)(\.com?)?(\.[a-z]{2})?\.?$/),Pc={customPixels:["nonGooglePixels"],html:["customScripts","customPixels","nonGooglePixels","nonGoogleScripts","nonGoogleIframes"],customScripts:["html","customPixels","nonGooglePixels","nonGoogleScripts","nonGoogleIframes"],nonGooglePixels:[],nonGoogleScripts:["nonGooglePixels"],nonGoogleIframes:["nonGooglePixels"]},Qc={customPixels:["customScripts","html"],html:["customScripts"],customScripts:["html"],nonGooglePixels:["customPixels",
"customScripts","html","nonGoogleScripts","nonGoogleIframes"],nonGoogleScripts:["customScripts","html"],nonGoogleIframes:["customScripts","html","nonGoogleScripts"]},Rc=function(a,b){for(var c=[],d=0;d<a.length;d++)c.push(a[d]),c.push.apply(c,b[a[d]]||[]);return c};
var Sc=function(a){var b=Hc("gtm.whitelist");var c=b&&Rc(xc(b),Pc),d=Hc("gtm.blacklist")||Hc("tagTypeBlacklist")||[];
Oc.test(C.location&&C.location.hostname)&&(d=xc(d),d.push("nonGooglePixels","nonGoogleScripts"));var e=d&&Rc(xc(d),Qc),f={};return function(h){var k=h&&h[R.L];if(!k||"string"!=typeof k)return!0;k=k.replace(/^_*/,"");if(void 0!==f[k])return f[k];var l=pc[k]||[],m=a(k);if(b){var n;if(n=m)a:{if(0>ra(c,k))if(l&&0<l.length)for(var p=0;p<l.length;p++){if(0>ra(c,l[p])){n=!1;break a}}else{n=!1;break a}n=!0}m=n}var q=!1;if(d){var r;if(!(r=0<=
ra(e,k)))a:{for(var u=l||[],t=new Ac,A=0;A<e.length;A++)t.set(e[A],!0);for(A=0;A<u.length;A++)if(t.get(u[A])){r=!0;break a}r=!1}q=r}return f[k]=!m||q}};var Tc={hd:function(a,b){b[R.Hb]&&"string"===typeof a&&(a=1==b[R.Hb]?a.toLowerCase():a.toUpperCase());b.hasOwnProperty(R.Jb)&&null===a&&(a=b[R.Jb]);b.hasOwnProperty(R.Lb)&&void 0===a&&(a=b[R.Lb]);b.hasOwnProperty(R.Kb)&&!0===a&&(a=b[R.Kb]);b.hasOwnProperty(R.Ib)&&!1===a&&(a=b[R.Ib]);return a}};var Wc=function(a){var b=lc.zones;!b&&a&&(b=lc.zones=a());return b},Xc={active:!0,isWhitelisted:function(){return!0}};var Yc=!1,Zc=0,$c=[];function ad(a){if(!Yc){var b=D.createEventObject,c="complete"==D.readyState,d="interactive"==D.readyState;if(!a||"readystatechange"!=a.type||c||!b&&d){Yc=!0;for(var e=0;e<$c.length;e++)N($c[e])}$c.push=function(){for(var a=0;a<arguments.length;a++)N(arguments[a]);return 0}}}function bd(){if(!Yc&&140>Zc){Zc++;try{D.documentElement.doScroll("left"),ad()}catch(a){C.setTimeout(bd,50)}}}var cd=function(a){Yc?a():$c.push(a)};var dd=!1,ed=function(){return C.GoogleAnalyticsObject&&C[C.GoogleAnalyticsObject]};var fd=function(a){C.GoogleAnalyticsObject||(C.GoogleAnalyticsObject=a||"ga");var b=C.GoogleAnalyticsObject;if(!C[b]){var c=function(){c.q=c.q||[];c.q.push(arguments)};c.l=Number(new Date);C[b]=c}return C[b]},gd=function(a,b,c,d){b=String(b).replace(/\s+/g,"").split(",");var e=ed();e(a+"require","linker");e(a+"linker:autoLink",b,c,d)};
var kd=function(){return"&tc="+Sb.filter(function(a){return a}).length},ld="0.005000">Math.random(),md=function(){var a=0,b=0;return{Nd:function(){if(2>a)return!1;1E3<=(new Date).getTime()-b&&(a=0);return 2<=a},ie:function(){1E3<=(new Date).getTime()-b&&(a=0);a++;b=(new Date).getTime()}}},nd="",od=function(){nd=[nc,"&v=3&t=t","&pid="+zc(),"&rv=7n"].join("")},pd={},qd="",rd=void 0,sd={},td={},ud=void 0,vd=null,wd=1E3,xd=function(){var a=rd;return void 0===a?"":[nd,
pd[a]?"":"&es=1",sd[a],kd(),qd,"&z=0"].join("")},yd=function(){ud&&(C.clearTimeout(ud),ud=void 0);void 0===rd||pd[rd]&&!qd||(td[rd]||vd.Nd()||0>=wd--?td[rd]=!0:(vd.ie(),K(xd()),pd[rd]=!0,qd=""))},zd=function(a,b,c){if(ld&&!td[a]&&b){a!==rd&&(yd(),rd=a);var d=c+String(b[R.L]||"").replace(/_/g,"");qd=qd?qd+"."+d:"&tr="+d;ud||(ud=C.setTimeout(yd,500));2022<=xd().length&&yd()}};function Ad(a,b,c,d,e,f){var h=Sb[a],k=Bd(a,b,c,d,e,f);if(!k)return null;var l=bc(h[R.Ob],f.X,[]);if(l&&l.length){var m=l[0];k=Ad(m.index,b,k,1===m.Zb?e:k,e,f)}return k}
function Bd(a,b,c,d,e,f){function h(){var b=cc(k,f.X);b.vtp_gtmOnSuccess=function(){zd(f.id,Sb[a],"5");c()};b.vtp_gtmOnFailure=function(){zd(f.id,Sb[a],"6");d()};b.vtp_gtmTagId=k.tag_id;if(k[R.Cc])d();else{zd(f.id,k,"1");try{Yb(b)}catch(A){zd(f.id,
k,"7");e()}}}var k=Sb[a];if(f.X(k))return null;var l=bc(k[R.Pb],f.X,[]);if(l&&l.length){var m=l[0],n=Ad(m.index,b,c,d,e,f);if(!n)return null;c=n;d=2===m.Zb?e:n}if(k[R.Nb]||k[R.Dc]){var p=k[R.Nb]?Tb:b,q=c,r=d;if(!p[a]){h=Dc(h);var u=Cd(a,p,h);c=u.R;d=u.ka}return function(){p[a](q,r)}}return h}function Cd(a,b,c){var d=[],e=[];b[a]=Dd(d,e,c);return{R:function(){b[a]=Ed;for(var c=0;c<d.length;c++)d[c]()},ka:function(){b[a]=Fd;for(var c=0;c<e.length;c++)e[c]()}}}
function Dd(a,b,c){return function(d,e){a.push(d);b.push(e);c()}}function Ed(a){a()}function Fd(a,b){b()};function Gd(a){var b=0,c=0,d=!1;return{add:function(){c++;return Dc(function(){b++;d&&b>=c&&a()})},Pc:function(){d=!0;b>=c&&a()}}}function Hd(a,b){if(!ld)return;var c=function(a){var d=b.X(Sb[a])?"3":"4",f=bc(Sb[a][R.Ob],b.X,[]);f&&f.length&&c(f[0].index);zd(b.id,Sb[a],d);var h=bc(Sb[a][R.Pb],b.X,[]);h&&h.length&&c(h[0].index)};c(a);}var Id=!1;var Jd=function(a,b){var c={};c[R.L]="__"+a;for(var d in b)b.hasOwnProperty(d)&&(c["vtp_"+d]=b[d]);for(d in void 0)(void 0).hasOwnProperty(d)&&(c[d]=(void 0)[d]);Sb.push(c);return Sb.length-1};var Kd="allow_ad_personalization_signals cookie_domain cookie_expires cookie_name cookie_path custom_params event_callback event_timeout groups send_to send_page_view session_duration user_properties".split(" ");var Ld=/[A-Z]+/,Md=/\s/,Nd=function(a){if(tc(a)&&(a=a.trim(),!Md.test(a))){var b=a.indexOf("-");if(!(0>b)){var c=a.substring(0,b);if(Ld.test(c)){for(var d=a.substring(b+1).split("/"),e=0;e<d.length;e++)if(!d[e])return;return{id:a,prefix:c,containerId:c+"-"+d[0],ia:d}}}}};var Od=null,Pd={},Qd={},Rd;function Sd(){Od=Od||!lc.gtagRegistered;lc.gtagRegistered=!0;return Od}var Td=function(a,b){var c={event:a};b&&(c.eventModel=x(b,void 0),b.event_callback&&(c.eventCallback=b.event_callback),b.event_timeout&&(c.eventTimeout=b.event_timeout));return c};
function Ud(a){if(void 0===Qd[a.id]){var b;if("UA"==a.prefix)b=Jd("gtagua",{trackingId:a.id});else if("AW"==a.prefix)b=Jd("gtagaw",{conversionId:a});else if("DC"==a.prefix)b=Jd("gtagfl",{targetId:a.id});else if("GF"==a.prefix)b=Jd("gtaggf",{conversionId:a});else if("G"==a.prefix)b=Jd("get",{trackingId:a.id,isAutoTag:!0});else return;if(!Rd){var c={name:"send_to",dataLayerVersion:2},d={};d[R.L]="__v";for(var e in c)c.hasOwnProperty(e)&&(d["vtp_"+e]=c[e]);Pb.push(d);Rd=["macro",Pb.length-1]}var f={arg0:Rd,
arg1:a.id,ignore_case:!1};f[R.L]="_lc";Rb.push(f);var h={"if":[Rb.length-1],add:[b]};h["if"]&&(h.add||h.block)&&Qb.push(h);Qd[a.id]=b}}
var Wd={event:function(a){var b=a[1];if(tc(b)&&!(3<a.length)){var c;if(2<a.length){if(!za(a[2]))return;c=a[2]}var d=Td(b,c);return d}},set:function(a){var b;2==a.length&&za(a[1])?
b=x(a[1],void 0):3==a.length&&tc(a[1])&&(b={},b[a[1]]=a[2]);if(b)return b.eventModel=x(b,void 0),b.event="gtag.set",b._clear=!0,b},js:function(a){if(2==a.length&&a[1].getTime)return{event:"gtm.js","gtm.start":a[1].getTime()}},config:function(a){}},Vd=Dc(function(){});var Xd=!1,Yd=[];function Zd(){if(!Xd){Xd=!0;for(var a=0;a<Yd.length;a++)N(Yd[a])}};var $d=[],ae=!1,be=function(a){var b=a.eventCallback,c=Dc(function(){sc(b)&&N(function(){b(kc.o)})}),d=a.eventTimeout;d&&C.setTimeout(c,Number(d));return c},ce=function(){for(var a=!1;!ae&&0<$d.length;){ae=!0;delete Fc.eventModel;var b=$d.shift();if(sc(b))try{b.call(Ic)}catch(de){}else if(qa(b)){var c=b;if(tc(c[0])){var d=c[0].split("."),e=d.pop(),f=c.slice(1),h=Hc(d.join("."),2);if(void 0!==h&&null!==h)try{h[e].apply(h,f)}catch(de){}}}else{var k=b;if(k&&("[object Arguments]"==Object.prototype.toString.call(k)||
Object.prototype.hasOwnProperty.call(k,"callee"))){a:{var l=b;if(l.length&&tc(l[0])){var m=Wd[l[0]];if(m){b=m(l);break a}}b=void 0}if(!b){ae=!1;continue}}var n;var p=void 0,q=b,r=q._clear;for(p in q)q.hasOwnProperty(p)&&"_clear"!==p&&(r&&Nc(p,void 0),Nc(p,q[p]));var u=q.event;if(u){var t=q["gtm.uniqueEventId"];t||(t=Bc(),q["gtm.uniqueEventId"]=t,Nc("gtm.uniqueEventId",t));mc=u;var A;var J,E,B=q,O=B.event,F=B["gtm.uniqueEventId"],L=lc.zones;E=L?L.checkState(kc.o,F):Xc;if(E.active){var I=be(B);c:{var M=
E.isWhitelisted;if("gtm.js"==O){if(Id){J=!1;break c}Id=!0}var W=F,S=O;if(ld&&!td[W]&&rd!==W){yd();rd=W;qd="";var H=sd,X=W,ca,sa=S;ca=0===sa.indexOf("gtm.")?encodeURIComponent(sa):"*";H[X]="&e="+ca+"&eid="+W;ud||(ud=C.setTimeout(yd,500))}var ia=Sc(M),aa={id:F,name:O,ad:I||rc,X:ia,Wa:hc(ia)};for(var Uc,Zb=aa,ee=Gd(Zb.ad),Sf=[],$b=[],lb=0;lb<Sb.length;lb++)if(Zb.Wa[lb]){var Tf=Sb[lb];var Bb=ee.add();try{var fe=Ad(lb,Sf,Bb,Bb,Bb,Zb);fe?$b.push(fe):(Hd(lb,Zb),Bb())}catch(de){Bb()}}ee.Pc();for(var Vc=0;Vc<$b.length;Vc++)$b[Vc]();Uc=0<$b.length;if("gtm.js"===O||"gtm.sync"===O)d:{}if(Uc){for(var Uf={__cl:!0,__evl:!0,__fsl:!0,__hl:!0,__jel:!0,__lcl:!0,__sdl:!0,__tl:!0,__ytl:!0},ac=0;ac<aa.Wa.length;ac++)if(aa.Wa[ac]){var he=Sb[ac];if(he&&!Uf[he[R.L]]){J=!0;break c}}J=!1}else J=Uc}A=J?!0:!1}else A=!1;mc=null;n=A}else n=!1;a=n||a}ae=!1}return!a},ie=function(){var a=ce();try{var b=C["dataLayer"].hide;if(b&&void 0!==b[kc.o]&&b.end){b[kc.o]=!1;var c=!0,d;for(d in b)if(b.hasOwnProperty(d)&&
!0===b[d]){c=!1;break}c&&(b.end(),b.end=null)}}catch(e){}return a},je=function(){var a=Na("dataLayer",[]),b=Na("google_tag_manager",{});b=b["dataLayer"]=b["dataLayer"]||{};$c.push(function(){b.gtmDom||(b.gtmDom=!0,a.push({event:"gtm.dom"}))});Yd.push(function(){b.gtmLoad||(b.gtmLoad=!0,a.push({event:"gtm.load"}))});var c=a.push;a.push=function(){var b=[].slice.call(arguments,0);c.apply(a,b);for($d.push.apply($d,b);300<this.length;)this.shift();return ce()};$d.push.apply($d,a.slice(0));
N(ie)};var ke={};ke.Ia=new String("undefined");ke.ab={};var le=function(a){this.resolve=function(b){for(var c=[],d=0;d<a.length;d++)c.push(a[d]===ke.Ia?b:a[d]);return c.join("")}};le.prototype.toString=function(){return this.resolve("undefined")};le.prototype.valueOf=le.prototype.toString;ke.jd=function(a){return new le(a)};var me={};ke.je=function(a,b){var c=Bc();me[c]=[a,b];return c};ke.Ub=function(a){var b=a?0:1;return function(a){var c=me[a];if(c&&"function"===typeof c[b])c[b]();me[a]=void 0}};
ke.Md=function(a){for(var b=!1,c=!1,d=2;d<a.length;d++)b=b||8===a[d],c=c||16===a[d];return b&&c};ke.ae=function(a){if(a===ke.Ia)return a;var b=Bc();ke.ab[b]=a;return'google_tag_manager["'+kc.o+'"].macro('+b+")"};ke.Fc=le;var ne=new Ac,oe=function(a,b){function c(a){var b=Q(a),c=P(b,"protocol"),d=P(b,"host",!0),e=P(b,"port"),f=P(b,"path").toLowerCase().replace(/\/$/,"");if(void 0===c||"http"==c&&"80"==e||"https"==c&&"443"==e)c="web",e="default";return[c,d,e,f]}for(var d=c(String(a)),e=c(String(b)),f=0;f<d.length;f++)if(d[f]!==e[f])return!1;return!0};
function pe(a){var b=a.arg0,c=a.arg1;switch(a["function"]){case "_cn":return 0<=String(b).indexOf(String(c));case "_css":var d;a:{if(b){var e=["matches","webkitMatchesSelector","mozMatchesSelector","msMatchesSelector","oMatchesSelector"];try{for(var f=0;f<e.length;f++)if(b[e[f]]){d=b[e[f]](c);break a}}catch(u){}}d=!1}return d;case "_ew":var h,k;h=String(b);k=String(c);var l=h.length-k.length;return 0<=l&&h.indexOf(k,l)==l;case "_eq":return String(b)==String(c);case "_ge":return Number(b)>=Number(c);
case "_gt":return Number(b)>Number(c);case "_lc":var m;m=String(b).split(",");return 0<=ra(m,String(c));case "_le":return Number(b)<=Number(c);case "_lt":return Number(b)<Number(c);case "_re":var n;var p=a.ignore_case?"i":void 0;try{var q=String(c)+p,r=ne.get(q);r||(r=new RegExp(c,p),ne.set(q,r));n=r.test(b)}catch(u){n=!1}return n;case "_sw":return 0==String(b).indexOf(String(c));case "_um":return oe(b,c)}return!1};function qe(a,b,c,d){return(d||"https:"==C.location.protocol?a:b)+c}function re(a,b){for(var c=b||(a instanceof v?new v:new va),d=a.P(),e=0;e<d.length();e++){var f=d.get(e);if(a.has(f)){var h=a.get(f);h instanceof v?(c.get(f)instanceof v||c.set(f,new v),re(h,c.get(f))):h instanceof va?(c.get(f)instanceof va||c.set(f,new va),re(h,c.get(f))):c.set(f,h)}}return c}function se(){return kc.o}function te(){return(new Date).getTime()}function ue(a,b){return Ca(Hc(a,b||2))}function ve(){return mc}
function we(a){return Va('<a href="'+a+'"></a>')[0].href}function xe(a){return vc(Aa(a))}function ye(a){return null===a?"null":void 0===a?"undefined":a.toString()}function ze(a,b){return zc(a,b)}function Ae(a,b,c){if(!(a instanceof v))return null;for(var d=new va,e=!1,f=0;f<a.length();f++){var h=a.get(f);h instanceof va&&h.has(b)&&h.has(c)&&(d.set(h.get(b),h.get(c)),e=!0)}return e?d:null}
var Be=function(){var a=new La;a.addAll(Za());a.addAll({buildSafeUrl:qe,decodeHtmlUrl:we,copy:re,generateUniqueNumber:Bc,getContainerId:se,getCurrentTime:te,getDataLayerValue:ue,getEventName:ve,makeInteger:xe,makeString:ye,randomInteger:ze,tableToMap:Ae});return function(b){return a.get(b)}};var Ce=new ab,De=function(){var a=data.runtime||[];Ob=function(a,b){var c=new va,d;for(d in b)b.hasOwnProperty(d)&&c.set(d,Ca(b[d]));var e=Ce.N([a,c]);e instanceof g&&"return"===e.w&&(e=e.getData());return Aa(e)};Vb=pe;$a(Ce,Be());for(var b=0;b<a.length;b++){var c=a[b];if(!qa(c)||3>c.length){if(0==c.length)continue;break}Ce.N(c)}};var Ee=function(a,b){var c=function(){};c.prototype=a.prototype;var d=new c;a.apply(d,Array.prototype.slice.call(arguments,1));return d};var Fe=function(a){return encodeURIComponent(a)},Ge=function(a){var b=["veinteractive.com","ve-interactive.cn"];if(!a)return!1;var c=P(Q(a),"host");if(!c)return!1;for(var d=0;b&&d<b.length;d++){var e=b[d]&&b[d].toLowerCase();if(e){var f=c.length-e.length;0<f&&"."!=e.charAt(0)&&(f--,e="."+e);if(0<=f&&c.indexOf(e,f)==f)return!0}}return!1};
var T=function(a,b,c){for(var d={},e=!1,f=0;a&&f<a.length;f++)a[f]&&a[f].hasOwnProperty(b)&&a[f].hasOwnProperty(c)&&(d[a[f][b]]=a[f][c],e=!0);return e?d:null},He=function(a,b){x(a,b)},Ie=function(a){return vc(a)},Je=function(a,b){return ra(a,b)};var Ke=function(a){var b={"gtm.element":a,"gtm.elementClasses":a.className,"gtm.elementId":a["for"]||Sa(a,"id")||"","gtm.elementTarget":a.formTarget||a.target||""};b["gtm.elementUrl"]=(a.attributes&&a.attributes.formaction?a.formAction:"")||a.action||a.href||a.src||a.code||a.codebase||"";return b},Le=function(a){lc.hasOwnProperty("autoEventsSettings")||(lc.autoEventsSettings={});var b=lc.autoEventsSettings;b.hasOwnProperty(a)||(b[a]={});return b[a]},Me=function(a,b,c,d){var e=Le(a),f=Cc(e,b,d);e[b]=
c(f)},Ne=function(a,b,c){var d=Le(a);return Cc(d,b,c)};var Oe=/(^|\.)doubleclick\.net$/i,Pe=/^(www\.)?google(\.com?)?(\.[a-z]{2})?$/,Qe=function(a,b,c){for(var d=String(b||D.cookie).split(";"),e=[],f=0;f<d.length;f++){var h=d[f].split("="),k=yc(h[0]);if(k&&k==a){var l=yc(h.slice(1).join("="));l&&!1!==c&&(l=decodeURIComponent(l));e.push(l)}}return e},Re=function(a,b,c,d,e,f){f&&(b=encodeURIComponent(b));var h=a+"="+b+"; ";c&&(h+="path="+c+"; ");e&&(h+="expires="+e.toGMTString()+"; ");var k,l;if("auto"==d){var m=P(C.location,"host",!0).split(".");if(4==
m.length&&/^[0-9]*$/.exec(m[3]))l=["none"];else{for(var n=[],p=m.length-2;0<=p;p--)n.push(m.slice(p).join("."));n.push("none");l=n}}else l=[d||"none"];k=l;for(var q=D.cookie,r=0;r<k.length;r++){var u=h,t=k[r],A=c;if(Oe.test(C.location.hostname)||"/"==A&&Pe.test(t))break;"none"!=k[r]&&(u+="domain="+k[r]+";");D.cookie=u;if(q!=D.cookie||0<=ra(Qe(a),b))break}};var Se=!1;if(D.querySelectorAll)try{var Te=D.querySelectorAll(":root");Te&&1==Te.length&&Te[0]==D.documentElement&&(Se=!0)}catch(a){}var Ue=Se;var Ve=function(a){for(var b=[],c=document.cookie.split(";"),d=new RegExp("^\\s*"+a+"=\\s*(.*?)\\s*$"),e=0;e<c.length;e++){var f=c[e].match(d);f&&b.push(f[1])}return b},Ye=function(a,b,c,d){var e=We(a,d);if(1===e.length)return e[0].id;if(0!==e.length){e=Xe(e,function(a){return a.rd},b);if(1===e.length)return e[0].id;e=Xe(e,function(a){return a.Zd},c);return e[0]?e[0].id:void 0}},af=function(a,b,c,d,e){c=void 0===c?"/":c;var f=d=void 0===d?"auto":d,h=c;if(Ze.test(document.location.hostname)||"/"===
h&&$e.test(f))return!1;var k=b;k&&1200<k.length&&(k=k.substring(0,1200));b=k;var l=a+"="+b+"; path="+c+"; ";void 0!==e&&(l+="expires="+(new Date((new Date).getTime()+e)).toGMTString()+"; ");if("auto"===d){var m=!1,n;a:{var p=[],q=document.location.hostname.split(".");if(4===q.length){var r=q[q.length-1];if(parseInt(r,10).toString()===r){n=["none"];break a}}for(var u=q.length-2;0<=u;u--)p.push(q.slice(u).join("."));p.push("none");n=p}for(var t=n,A=0;A<t.length&&!m;A++)m=af(a,b,c,t[A],e);return m}d&&
"none"!==d&&(l+="domain="+d+";");var J=document.cookie;document.cookie=l;return J!=document.cookie||0<=Ve(a).indexOf(b)};function Xe(a,b,c){for(var d=[],e=[],f,h=0;h<a.length;h++){var k=a[h],l=b(k);l===c?d.push(k):void 0===f||l<f?(e=[k],f=l):l===f&&e.push(k)}return 0<d.length?d:e}function We(a,b){for(var c=[],d=Ve(a),e=0;e<d.length;e++){var f=d[e].split("."),h=f.shift();if(!b||-1!==b.indexOf(h)){var k=f.shift();k&&(k=k.split("-"),c.push({id:f.join("."),rd:1*k[0]||1,Zd:1*k[1]||1}))}}return c}
var $e=/^(www\.)?google(\.com?)?(\.[a-z]{2})?$/,Ze=/(^|\.)doubleclick\.net$/i;var bf=window,cf=document;var ff=function(a){for(var b=bf.navigator.userAgent+(cf.cookie||"")+(cf.referrer||""),c=b.length,d=bf.history.length;0<d;)b+=d--^c++;var e=1,f,h,k;if(b)for(e=0,h=b.length-1;0<=h;h--)k=b.charCodeAt(h),e=(e<<6&268435455)+k+(k<<14),f=e&266338304,e=0!=f?e^f>>21:e;var l=[Math.round(2147483647*Math.random())^e&2147483647,Math.round(Date.now()/1E3)].join("."),m=""+df(void 0),n=ef(void 0);1<n&&(m+="-"+n);return[a,m,l].join(".")},gf=function(a,b,c,d){var e=df(b);return Ye(a,e,ef(c),d)};
function df(a){if(!a)return 1;a=0===a.indexOf(".")?a.substr(1):a;return a.split(".").length}function ef(a){if(!a||"/"===a)return 1;"/"!==a[0]&&(a="/"+a);"/"!==a[a.length-1]&&(a+="/");return a.split("/").length-1};var hf=["1"],jf={},mf=function(a,b,c){b=void 0===b?"auto":b;c=void 0===c?"/":c;var d=kf(void 0===a?"_gcl":a);if(!jf[d]&&!lf(d,b,c)){var e=ff("1");af(d,e,c,b,7776E6);lf(d,b,c)}};function lf(a,b,c){var d=gf(a,b,c,hf);d&&(jf[a]=d);return d}function kf(a){return(void 0===a?"_gcl":a)+"_au"};var nf=function(a){for(var b=[],c=D.cookie.split(";"),d=new RegExp("^\\s*"+a+"=\\s*(.*?)\\s*$"),e=0;e<c.length;e++){var f=c[e].match(d);f&&b.push(f[1])}var h=[];if(!b||0==b.length)return h;for(var k=0;k<b.length;k++){var l=b[k].split(".");3==l.length&&"GCL"==l[0]&&l[1]&&h.push(l[2])}return h};var of=/^\w+$/,pf=/^[\w-]+$/,qf=/^\d+\.fls\.doubleclick\.net$/;function rf(a){return a&&"string"==typeof a&&a.match(of)?a:"_gcl"}function sf(a){if(a){if("string"==typeof a){var b=rf(a);return{sa:b,ra:b,xa:b}}if(a&&"object"==typeof a)return{sa:rf(a.dc),ra:rf(a.aw),xa:rf(a.gf)}}return{sa:"_gcl",ra:"_gcl",xa:"_gcl"}}function tf(a){var b=Q(C.location.href),c=P(b,"host",!1);if(c&&c.match(qf)){var d=P(b,"path").split(a+"=");if(1<d.length)return d[1].split(";")[0].split("?")[0]}}
function uf(a){return a.filter(function(a){return pf.test(a)})}var wf=function(a){var b=tf("gclaw");if(b)return b.split(".");var c=sf(a);if("_gcl"==c.ra){var d=vf();if(d&&(null==d.D||"aw.ds"==d.D))return[d.W]}return uf(nf(c.ra+"_aw"))},xf=function(a){var b=tf("gcldc");if(b)return b.split(".");var c=sf(a);if("_gcl"==c.sa){var d=vf();if(d&&("ds"==d.D||"aw.ds"==d.D))return[d.W]}return uf(nf(c.sa+"_dc"))};
function vf(){var a=Q(C.location.href),b=P(a,"query",!1,void 0,"gclid"),c=P(a,"query",!1,void 0,"gclsrc");if(!b||!c){var d=P(a,"fragment");b=b||Xa(d,"gclid");c=c||Xa(d,"gclsrc")}return void 0!==b&&b.match(pf)?{W:b,D:c}:null}
var yf=function(){var a=tf("gac");if(a)return decodeURIComponent(a);for(var b=[],c=D.cookie.split(";"),d=/^\s*_gac_(UA-\d+-\d+)=\s*(.+?)\s*$/,e=0;e<c.length;e++){var f=c[e].match(d);f&&b.push({zb:f[1],value:f[2]})}var h={};if(b&&b.length)for(var k=0;k<b.length;k++){var l=b[k].value.split(".");"1"==l[0]&&3==l.length&&l[1]&&(h[b[k].zb]||(h[b[k].zb]=[]),h[b[k].zb].push({timestamp:l[1],W:l[2]}))}var m=[],n;for(n in h)if(h.hasOwnProperty(n)){for(var p=[],q=h[n],r=0;r<q.length;r++)p.push(q[r].W);p=uf(p);
p.length&&m.push(n+":"+p.join(","))}return m.join(";")},zf=function(a,b,c){};var Af;a:{Af="G"}var Bf={"":"n",UA:"u",AW:"a",DC:"d",G:"e",GTM:Af},Cf=function(a){var b=kc.o.split("-"),c=b[0].toUpperCase();return(Bf[c]||"i")+"7n"+(a&&"GTM"===c?b[1]:"")};var Jf=!!C.MutationObserver,Kf=void 0,Lf=function(a){if(!Kf){var b=function(){var a=D.body;if(a)if(Jf)(new MutationObserver(function(){for(var a=0;a<Kf.length;a++)N(Kf[a])})).observe(a,{childList:!0,subtree:!0});else{var b=!1;Qa(a,"DOMNodeInserted",function(){b||(b=!0,N(function(){b=!1;for(var a=0;a<Kf.length;a++)N(Kf[a])}))})}};Kf=[];D.body?b():N(b)}Kf.push(a)};var Yf="www.googletagmanager.com/gtm.js";
var Zf=Yf,$f=function(a,b,c,d){Qa(a,b,c,d)},ag=function(a,b){return C.setTimeout(a,b)},bg=function(a,b,c){G(a,b,c)},cg={},dg=function(a,b,c){var d=cg[a];if(void 0===d){var e=function(a,b){return function(){a.status=b;for(var c=2==b?a.yc:a.Yb,d=0;d<c.length;d++)C.setTimeout(c[d],0)}};d={status:1,yc:[],Yb:[],pe:void 0};d.Xe=G(a,e(d,2),e(d,3));cg[a]=d}0===d.status&&(d.pe(),d.status=2);2===d.status?b&&b():3===d.status?c&&c():1===d.status&&(b&&d.yc.push(b),c&&d.Yb.push(c))},eg=function(){return C.location.href},
fg=function(a){return P(Q(a),"fragment")},U=function(a,b){return Hc(a,b||2)},gg=function(a,b,c){b&&(a.eventCallback=b,c&&(a.eventTimeout=c));return C["dataLayer"].push(a)},hg=function(a,b){C[a]=b},V=function(a,b,c){b&&(void 0===C[a]||c&&!C[a])&&(C[a]=b);return C[a]},ig=function(a,b,c){var d=b,e=c,f=sf(a);e=e||"auto";d=d||"/";var h=vf();if(null!=h){var k=(new Date).getTime(),l=new Date(k+7776E6),m=["GCL",Math.round(k/1E3),h.W].join(".");h.D&&"aw.ds"!=h.D||Re(f.ra+"_aw",m,d,e,l,!0);"aw.ds"!=h.D&&
"ds"!=h.D||Re(f.sa+"_dc",m,d,e,l,!0);"gf"==h.D&&Re(f.xa+"_gf",m,d,e,l,!0)}},jg=function(a,b){var c;a:{var d;d=100;for(var e={},f=0;f<b.length;f++)e[b[f]]=!0;for(var h=a,k=0;h&&k<=d;k++){if(e[String(h.tagName).toLowerCase()]){c=h;break a}h=h.parentElement}c=null}return c},Y=function(a,b,c,d){var e=!d&&"http:"==C.location.protocol;e&&(e=2!==kg());return(e?b:a)+c};
var lg=function(a){var b=0;return b},mg=function(a){},ng=function(a){var b=!1;return b},og=function(a,b){var c;a:{if(a&&
qa(a))for(var d=0;d<a.length;d++)if(a[d]&&b(a[d])){c=a[d];break a}c=void 0}return c},pg=function(a,b,c,d){Me(a,b,c,d)},qg=function(a,b,c){return Ne(a,b,c)},rg=function(a){return!!Ne(a,"init",!1)},sg=function(a){Le(a).init=!0};
var kg=function(){var a=Zf;if(qc){if(0===qc.toLowerCase().indexOf("https://"))return 2;if(0===qc.toLowerCase().indexOf("http://"))return 3}a=a.toLowerCase();for(var b="https://"+a,c="http://"+a,d=1,e=D.getElementsByTagName("script"),f=0;f<e.length&&100>f;f++){var h=e[f].src;if(h){h=h.toLowerCase();if(0===h.indexOf(c))return 3;1===d&&0===h.indexOf(b)&&(d=2)}}return d};var vg=function(a,b,c){var d=(void 0===c?0:c)?"www.googletagmanager.com/gtag/js":Zf;d+="?id="+encodeURIComponent(a)+"&l=dataLayer";if(b)for(var e in b)b[e]&&b.hasOwnProperty(e)&&(d+="&"+e+"="+encodeURIComponent(b[e]));var f=Y("https://","http://",d);G(f,void 0,void 0)};var xg=function(a,b,c){a instanceof ke.Fc&&(a=a.resolve(ke.je(b,c)),b=rc);return{kb:a,R:b}};var yg=function(a,b,c){this.n=a;this.t=b;this.p=c},zg=function(){this.c=1;this.e=[];this.p=null};function Ag(a){var b=lc,c=b.gss=b.gss||{};return c[a]=c[a]||new zg}var Bg=function(a,b){Ag(a).p=b},Cg=function(a,b,c){var d=Math.floor((new Date).getTime()/1E3);Ag(a).e.push(new yg(b,d,c))},Dg=function(a){};var Mg=window,Ng=document,Og=function(a){var b=Mg._gaUserPrefs;if(b&&b.ioo&&b.ioo()||a&&!0===Mg["ga-disable-"+a])return!0;try{var c=Mg.external;if(c&&c._gaUserPrefs&&"oo"==c._gaUserPrefs)return!0}catch(m){}for(var d=[],e=Ng.cookie.split(";"),f=/^\s*AMP_TOKEN=\s*(.*?)\s*$/,h=0;h<e.length;h++){var k=e[h].match(f);k&&d.push(k[1])}for(var l=0;l<d.length;l++)if("$OPT_OUT"==decodeURIComponent(d[l]))return!0;return!1};var Rg=function(a){if(1===Ag(a).c){Ag(a).c=2;var b=encodeURIComponent(a);G(("http:"!=C.location.protocol?"https:":"http:")+("//www.googletagmanager.com/gtag/js?id="+b+"&l=dataLayer&cx=c"))}},Sg=function(a,b){};var Z={a:{}};
Z.a.jsm=["customScripts"],function(){(function(a){Z.__jsm=a;Z.__jsm.b="jsm";Z.__jsm.g=!0})(function(a){if(void 0!==a.vtp_javascript){var b=a.vtp_javascript;try{var c=V("google_tag_manager");return c&&c.e&&c.e(b)}catch(d){}}})}();
Z.a.sp=["google"],function(){(function(a){Z.__sp=a;Z.__sp.b="sp";Z.__sp.g=!0})(function(a){var b=a.vtp_gtmOnFailure;bg("//www.googleadservices.com/pagead/conversion_async.js",function(){var c=V("google_trackConversion");if(sc(c)){var d={};"DATA_LAYER"==a.vtp_customParamsFormat?d=a.vtp_dataLayerVariable:"USER_SPECIFIED"==a.vtp_customParamsFormat&&(d=T(a.vtp_customParams,"key","value"));c({google_conversion_id:a.vtp_conversionId,google_conversion_label:a.vtp_conversionLabel,google_custom_params:d,google_remarketing_only:!0,
onload_callback:a.vtp_gtmOnSuccess,google_gtm:Cf(void 0)})||b()}else b()},b)})}();Z.a.c=["google"],function(){(function(a){Z.__c=a;Z.__c.b="c";Z.__c.g=!0})(function(a){return a.vtp_value})}();
Z.a.d=["google"],function(){(function(a){Z.__d=a;Z.__d.b="d";Z.__d.g=!0})(function(a){var b=null,c=null,d=a.vtp_attributeName;if("CSS"==a.vtp_selectorType){var e=Ue?D.querySelectorAll(a.vtp_elementSelector):null;e&&0<e.length&&(b=e[0])}else b=Ta(a.vtp_elementId);b&&(c=d?Sa(b,d):Ua(b));return yc(String(b&&c))})}();
Z.a.e=["google"],function(){(function(a){Z.__e=a;Z.__e.b="e";Z.__e.g=!0})(function(){return mc})}();Z.a.f=["google"],function(){(function(a){Z.__f=a;Z.__f.b="f";Z.__f.g=!0})(function(a){var b=U("gtm.referrer",1)||D.referrer,c;if(b){var d;if(a.vtp_component&&"URL"!=a.vtp_component){var e=Q(String(b));d=P(e,a.vtp_component,a.vtp_stripWww,a.vtp_defaultPages,a.vtp_queryKey)}else d=Ya(Q(String(b)));c=d}else c=String(b);return c})}();
Z.a.cl=["google"],function(){function a(a){var b=a.target;if(b){var d=Ke(b);d.event="gtm.click";gg(d)}}(function(a){Z.__cl=a;Z.__cl.b="cl";Z.__cl.g=!0})(function(b){if(!rg("cl")){var c=V("document");Qa(c,"click",a,!0);sg("cl");var d=Ne("cl","legacyTeardown",void 0);d&&d()}N(b.vtp_gtmOnSuccess)})}();
Z.a.j=["google"],function(){(function(a){Z.__j=a;Z.__j.b="j";Z.__j.g=!0})(function(a){for(var b=String(a.vtp_name).split("."),c=V(b.shift()),d=0;d<b.length;d++)c=c&&c[b[d]];return c})}();
Z.a.r=["google"],function(){(function(a){Z.__r=a;Z.__r.b="r";Z.__r.g=!0})(function(a){return zc(a.vtp_min,a.vtp_max)})}();

Z.a.u=["google"],function(){var a=function(a){return{toString:function(){return a}}};(function(a){Z.__u=a;Z.__u.b="u";Z.__u.g=!0})(function(b){var c;c=(c=b.vtp_customUrlSource?b.vtp_customUrlSource:U("gtm.url",1))||eg();var d=b[a("vtp_component")],e;if(d&&"URL"!=d){var f=Q(String(c));e=P(f,d,"HOST"==d?b[a("vtp_stripWww")]:void 0,"PATH"==d?b[a("vtp_defaultPages")]:void 0,"QUERY"==d?b[a("vtp_queryKey")]:void 0)}else e=Ya(Q(String(c)));return e})}();
Z.a.v=["google"],function(){(function(a){Z.__v=a;Z.__v.b="v";Z.__v.g=!0})(function(a){var b=a.vtp_name;if(!b||!b.replace)return!1;var c=U(b.replace(/\\\./g,"."),a.vtp_dataLayerVersion||1);return void 0!==c?c:a.vtp_defaultValue})}();
Z.a.tl=["google"],function(){function a(a){return function(){if(a.pb&&a.qb>=a.pb)a.lb&&V("self").clearInterval(a.lb);else{a.qb++;var b=(new Date).getTime();gg({event:a.V,"gtm.timerId":a.lb,"gtm.timerEventNumber":a.qb,"gtm.timerInterval":a.interval,"gtm.timerLimit":a.pb,"gtm.timerStartTime":a.xc,"gtm.timerCurrentTime":b,"gtm.timerElapsedTime":b-a.xc,"gtm.triggers":a.ye})}}}(function(a){Z.__tl=a;Z.__tl.b="tl";Z.__tl.g=!0})(function(b){N(b.vtp_gtmOnSuccess);if(!isNaN(b.vtp_interval)){var c={V:b.vtp_eventName,
qb:0,interval:Number(b.vtp_interval),pb:isNaN(b.vtp_limit)?0:Number(b.vtp_limit),ye:String(b.vtp_uniqueTriggerId||"0"),xc:(new Date).getTime()};c.lb=V("self").setInterval(a(c),0>Number(b.vtp_interval)?0:Number(b.vtp_interval))}})}();
Z.a.ua=["google"],function(){var a,b=function(b){var c={},e={},f={},h={},k={};if(b.vtp_gaSettings){var l=b.vtp_gaSettings;He(T(l.vtp_fieldsToSet,"fieldName","value"),e);He(T(l.vtp_contentGroup,"index","group"),f);He(T(l.vtp_dimension,"index","dimension"),h);He(T(l.vtp_metric,"index","metric"),k);b.vtp_gaSettings=null;l.vtp_fieldsToSet=void 0;l.vtp_contentGroup=void 0;l.vtp_dimension=void 0;l.vtp_metric=void 0;var m=x(l,void 0);b=x(b,m)}He(T(b.vtp_fieldsToSet,"fieldName","value"),e);He(T(b.vtp_contentGroup,
"index","group"),f);He(T(b.vtp_dimension,"index","dimension"),h);He(T(b.vtp_metric,"index","metric"),k);var n=fd(b.vtp_functionName),p="",q="";b.vtp_setTrackerName&&"string"==typeof b.vtp_trackerName?""!==b.vtp_trackerName&&(q=b.vtp_trackerName,p=q+"."):(q="gtm"+Bc(),p=q+".");var r={name:!0,clientId:!0,sampleRate:!0,siteSpeedSampleRate:!0,alwaysSendReferrer:!0,allowAnchor:!0,allowLinker:!0,cookieName:!0,cookieDomain:!0,cookieExpires:!0,cookiePath:!0,cookieUpdate:!0,legacyCookieDomain:!0,legacyHistoryImport:!0,
storage:!0,useAmpClientId:!0,storeGac:!0},u={allowAnchor:!0,allowLinker:!0,alwaysSendReferrer:!0,anonymizeIp:!0,cookieUpdate:!0,exFatal:!0,forceSSL:!0,javaEnabled:!0,legacyHistoryImport:!0,nonInteraction:!0,useAmpClientId:!0,useBeacon:!0,storeGac:!0,allowAdFeatures:!0},t=function(a){var b=[].slice.call(arguments,0);b[0]=p+b[0];n.apply(window,b)},A=function(a,b){return void 0===b?b:a(b)},J=function(a,b){if(b)for(var c in b)b.hasOwnProperty(c)&&t("set",a+c,b[c])},E=function(){},B=function(a,b,c){var d=0;if(a)for(var e in a)if(a.hasOwnProperty(e)&&(c&&r[e]||!c&&void 0===r[e])){var f=u[e]?wc(a[e]):a[e];"anonymizeIp"!=e||f||(f=void 0);b[e]=f;d++}return d},O={name:q};B(e,O,
!0);n("create",b.vtp_trackingId||c.trackingId,O);t("set","&gtm",Cf(!0));(function(a,c){void 0!==b[c]&&t("set",a,b[c])})("nonInteraction","vtp_nonInteraction");J("contentGroup",f);J("dimension",h);J("metric",k);var F={};B(e,F,!1)&&t("set",F);var L;b.vtp_enableLinkId&&t("require","linkid","linkid.js");t("set","hitCallback",function(){var a=
e&&e.hitCallback;sc(a)&&a();b.vtp_gtmOnSuccess()});if("TRACK_EVENT"==b.vtp_trackType){b.vtp_enableEcommerce&&(t("require","ec","ec.js"),E());var I={hitType:"event",eventCategory:String(b.vtp_eventCategory||c.category),eventAction:String(b.vtp_eventAction||c.action),eventLabel:A(String,b.vtp_eventLabel||c.label),eventValue:A(Ie,b.vtp_eventValue||c.value)};B(L,I,!1);t("send",I);}else if("TRACK_SOCIAL"==
b.vtp_trackType){}else if("TRACK_TRANSACTION"==b.vtp_trackType){}else if("TRACK_TIMING"==b.vtp_trackType){}else if("DECORATE_LINK"==b.vtp_trackType){}else if("DECORATE_FORM"==b.vtp_trackType){}else if("TRACK_DATA"==
b.vtp_trackType){}else{b.vtp_enableEcommerce&&(t("require","ec","ec.js"),E());if(b.vtp_doubleClick||"DISPLAY_FEATURES"==b.vtp_advertisingFeaturesType){var sa="_dc_gtm_"+String(b.vtp_trackingId).replace(/[^A-Za-z0-9-]/g,"");t("require","displayfeatures",void 0,{cookieName:sa})}"DISPLAY_FEATURES_WITH_REMARKETING_LISTS"==b.vtp_advertisingFeaturesType&&
(sa="_dc_gtm_"+String(b.vtp_trackingId).replace(/[^A-Za-z0-9-]/g,""),t("require","adfeatures",{cookieName:sa}));L?t("send","pageview",L):t("send","pageview");b.vtp_autoLinkDomains&&gd(p,b.vtp_autoLinkDomains,!!b.vtp_useHashAutoLink,!!b.vtp_decorateFormsAutoLink);}if(!a){var ia=b.vtp_useDebugVersion?"u/analytics_debug.js":"analytics.js";b.vtp_useInternalVersion&&!b.vtp_useDebugVersion&&
(ia="internal/"+ia);a=!0;dg(Y("https:","http:","//www.google-analytics.com/"+ia,e&&e.forceSSL),function(){var a=ed();a&&a.loaded||b.vtp_gtmOnFailure();},b.vtp_gtmOnFailure)}};Z.__ua=b;Z.__ua.b="ua";Z.__ua.g=!0}();

Z.a.aev=["google"],function(){var a=void 0,b="",c=0,d=void 0,e={ATTRIBUTE:"gtm.elementAttribute",CLASSES:"gtm.elementClasses",ELEMENT:"gtm.element",ID:"gtm.elementId",HISTORY_CHANGE_SOURCE:"gtm.historyChangeSource",HISTORY_NEW_STATE:"gtm.newHistoryState",HISTORY_NEW_URL_FRAGMENT:"gtm.newUrlFragment",HISTORY_OLD_STATE:"gtm.oldHistoryState",HISTORY_OLD_URL_FRAGMENT:"gtm.oldUrlFragment",TARGET:"gtm.elementTarget"},f=function(a){var b=U(e[a.vtp_varType],1);return void 0!==b?b:a.vtp_defaultValue};(function(a){Z.__aev=
a;Z.__aev.b="aev";Z.__aev.g=!0})(function(e){switch(e.vtp_varType){case "TAG_NAME":return U("gtm.element",1).tagName||e.vtp_defaultValue;case "TEXT":var h,l=U("gtm.element",1),m=U("event",1),n=Number(new Date);a===l&&b===m&&c>n-250?h=d:(d=h=l?Ua(l):"",a=l,b=m);c=n;return h||e.vtp_defaultValue;case "URL":var p=String(U("gtm.elementUrl",1)||e.vtp_defaultValue||""),q=Q(p);return e.vtp_component&&"URL"!=e.vtp_component?P(q,e.vtp_component,e.vtp_stripWww,e.vtp_defaultPages,e.vtp_queryKey):p;case "ATTRIBUTE":var r;
if(void 0===e.vtp_attribute)r=f(e);else{var u=U("gtm.element",1);r=Sa(u,e.vtp_attribute)||e.vtp_defaultValue||""}return r;default:return f(e)}})}();

Z.a.awct=["google"],function(){var a=!1,b=[],c=function(a){var b=V("google_trackConversion"),c=a.gtm_onFailure;"function"==typeof b?b(a)||c():c()},d=function(){for(;0<b.length;)c(b.shift())},e=function(b){return function(){d();a=!1;var c=cg[b];c&&3==c.status&&(cg[b]=void 0)}},f=function(){return function(){d();b={push:c};}},h=function(c){var d={google_conversion_domain:"",google_conversion_id:c.vtp_conversionId,google_conversion_label:c.vtp_conversionLabel,
google_conversion_value:c.vtp_conversionValue||0,google_remarketing_only:!1,onload_callback:c.vtp_gtmOnSuccess,gtm_onFailure:c.vtp_gtmOnFailure,google_gtm:Cf(void 0)};c.vtp_currencyCode&&(d.google_conversion_currency=c.vtp_currencyCode);c.vtp_orderId&&(d.google_conversion_order_id=c.vtp_orderId);c.vtp_allowReadGaCookie&&(d.google_read_ga_cookie_opt_in=!0);!c.hasOwnProperty("vtp_enableConversionLinker")||c.vtp_enableConversionLinker?(c.vtp_conversionCookiePrefix&&(d.google_gcl_cookie_prefix=c.vtp_conversionCookiePrefix),
d.google_read_gcl_cookie_opt_out=!1):d.google_read_gcl_cookie_opt_out=!0;b.push(d);a||(a=!0,dg("//www.googleadservices.com/pagead/conversion_async.js",f(),e("//www.googleadservices.com/pagead/conversion_async.js")))};Z.__awct=h;Z.__awct.b="awct";Z.__awct.g=!0}();
Z.a.smm=["google"],function(){(function(a){Z.__smm=a;Z.__smm.b="smm";Z.__smm.g=!0})(function(a){var b=a.vtp_input,c=T(a.vtp_map,"key","value")||{};return c.hasOwnProperty(b)?c[b]:a.vtp_defaultValue})}();



Z.a.paused=[],function(){(function(a){Z.__paused=a;Z.__paused.b="paused";Z.__paused.g=!0})(function(a){N(a.vtp_gtmOnFailure)})}();
Z.a.html=["customScripts"],function(){var a=function(b,c,f,h){return function(){try{if(0<c.length){var d=c.shift(),e=a(b,c,f,h);if("SCRIPT"==String(d.nodeName).toUpperCase()&&"text/gtmscript"==d.type){var m=D.createElement("script");m.async=!1;m.type="text/javascript";m.id=d.id;m.text=d.text||d.textContent||d.innerHTML||"";d.charset&&(m.charset=d.charset);var n=d.getAttribute("data-gtmsrc");n&&(m.src=n,Oa(m,e));b.insertBefore(m,null);n||e()}else if(d.innerHTML&&0<=d.innerHTML.toLowerCase().indexOf("<script")){for(var p=
[];d.firstChild;)p.push(d.removeChild(d.firstChild));b.insertBefore(d,null);a(d,p,e,h)()}else b.insertBefore(d,null),e()}else f()}catch(q){N(h)}}};var b=function(a,b,c){cd(function(){var d,e=lc;e.postscribe||(e.postscribe=jc);d=e.postscribe;var f={done:b},m=D.createElement("div");m.style.display="none";m.style.visibility="hidden";D.body.appendChild(m);try{d(m,a,f)}catch(n){N(c)}})};var c=function(d){if(D.body){var e=
d.vtp_gtmOnFailure,f=xg(d.vtp_html,d.vtp_gtmOnSuccess,e),h=f.kb,k=f.R;if(d.vtp_useIframe){}else d.vtp_supportDocumentWrite?b(h,k,e):a(D.body,Va(h),k,e)()}else ag(function(){c(d)},200)};Z.__html=c;Z.__html.b="html";Z.__html.g=!0}();

Z.a.img=["customPixels"],function(){(function(a){Z.__img=a;Z.__img.b="img";Z.__img.g=!0})(function(a){var b=Va('<a href="'+a.vtp_url+'"></a>')[0].href,c=a.vtp_cacheBusterQueryParam;if(a.vtp_useCacheBuster){c||(c="gtmcb");var d=b.charAt(b.length-1),e=0<=b.indexOf("?")?"?"==d||"&"==d?"":"&":"?";b+=e+c+"="+a.vtp_randomNumber}K(b,a.vtp_gtmOnSuccess,a.vtp_gtmOnFailure)})}();

Z.a.lcl=[],function(){function a(){var a=V("document"),d=0,e=function(c){var e=c.target;if(e&&3!==c.which&&(!c.timeStamp||c.timeStamp!==d)){d=c.timeStamp;e=jg(e,["a","area"]);if(!e)return c.returnValue;var f=c.defaultPrevented||!1===c.returnValue,l=Ne("lcl",f?"nv.mwt":"mwt",0),m=Ke(e);m.event="gtm.linkClick";if(f){var n=qg("lcl","nv.ids",[]).join(",");if(n)m["gtm.triggers"]=n;else return}else{var p=qg("lcl","ids",[]).join(",");m["gtm.triggers"]=p}if(b(c,e,a)&&!f&&l&&e.href){var q=V((e.target||"_self").substring(1)),
r=!0;if(gg(m,function(){r&&q&&(q.location.href=e.href)},l))r=!1;else return c.preventDefault&&c.preventDefault(),c.returnValue=!1}else gg(m,function(){},l||2E3);return!0}};Qa(a,"click",e,!1);Qa(a,"auxclick",e,!1)}function b(a,b,e){if(2===a.which||a.ctrlKey||a.shiftKey||a.altKey||a.metaKey)return!1;var c=b.href.indexOf("#"),d=b.target;if(d&&"_self"!==d&&"_parent"!==d&&"_top"!==d||0===c)return!1;if(0<c){var k=Ya(Q(b.href)),l=Ya(Q(e.location));return k!==l}return!0}(function(a){Z.__lcl=a;Z.__lcl.b="lcl";
Z.__lcl.g=!0})(function(b){var c=void 0===b.vtp_waitForTags?!0:b.vtp_waitForTags,e=void 0===b.vtp_checkValidation?!0:b.vtp_checkValidation,f=Number(b.vtp_waitForTagsTimeout);if(!f||0>=f)f=2E3;var h=b.vtp_uniqueTriggerId||"0";if(c){var k=function(a){return Math.max(f,a)};Me("lcl","mwt",k,0);e||Me("lcl","nv.mwt",k,0)}var l=function(a){a.push(h);return a};pg("lcl","ids",l,[]);e||pg("lcl","nv.ids",l,[]);if(!rg("lcl")){a();sg("lcl");var m=Ne("lcl","legacyTeardown",void 0);m&&m()}N(b.vtp_gtmOnSuccess)})}();


var Tg={macro:function(a){if(ke.ab.hasOwnProperty(a))return ke.ab[a]}};Tg.dataLayer=Ic;Tg.onHtmlSuccess=ke.Ub(!0);Tg.onHtmlFailure=ke.Ub(!1);Tg.callback=function(a){oc.hasOwnProperty(a)&&sc(oc[a])&&oc[a]();delete oc[a]};Tg.Uc=function(){lc[kc.o]=Tg;pc=Z.a;Wb=Wb||ke;Xb=Tc};
Tg.Id=function(){lc=C.google_tag_manager=C.google_tag_manager||{};if(lc[kc.o]){var a=lc.zones;a&&a.unregisterChild(kc.o)}else{for(var b=data.resource||{},c=b.macros||[],d=0;d<c.length;d++)Pb.push(c[d]);for(var e=b.tags||[],f=0;f<e.length;f++)Sb.push(e[f]);for(var h=b.predicates||[],k=0;k<h.length;k++)Rb.push(h[k]);for(var l=b.rules||[],m=0;m<l.length;m++){for(var n=l[m],p={},q=0;q<n.length;q++)p[n[q][0]]=Array.prototype.slice.call(n[q],1);Qb.push(p)}Ub=Z;De();Tg.Uc();je();Yc=!1;Zc=0;if("interactive"==
D.readyState&&!D.createEventObject||"complete"==D.readyState)ad();else{Qa(D,"DOMContentLoaded",ad);Qa(D,"readystatechange",ad);if(D.createEventObject&&D.documentElement.doScroll){var r=!0;try{r=!C.frameElement}catch(t){}r&&bd()}Qa(C,"load",ad)}Xd=!1;"complete"===D.readyState?Zd():Qa(C,"load",Zd);a:{
if(!ld)break a;od();rd=void 0;sd={};pd={};ud=void 0;td={};qd="";vd=md();C.setInterval(od,864E5);}}};Tg.Id();

})()
