var app5=new Vue({
    el: '#app-5',
    data: {
        age:24
    },
    methods: {
        add: function(inc) {
            this.age+=inc;
        }
        subst:function(dec){
            this.age-=dec;
        }
    }
}); 