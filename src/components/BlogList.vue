<template>
  <div id="card_group">
    <b-card-group columns>
      <b-card v-for="(m_card, index) in cards"
                :key="index"
                :title="m_card.title"
                :img-src="m_card.img_src"
                img-fluid
                img-alt="image"
                img-top>
        <p class="card-text">{{ m_card.abstract }}</p>
        <router-link :to="'/article/' + m_card.title" tag="a">阅读全文</router-link>
        <div slot="footer">
          <small class="text-muted">最后更新：{{ m_card.update_time.substring(0, 19).replace('T', ' ') }}</small>
        </div>
      </b-card>
    </b-card-group>
  </div>
</template>

<script>
export default {
  created: function(){
    console.log('created')
    this.init_cards(this);
  },
  name: 'BlogList',
  methods:{
    init_cards: function(_) {
    console.log('init_cards')
      this.$ajax.get('http://119.23.51.227:8080/cards')
        .then(function(res) {
          console.log(res);
          _.cards = res.data;
        })
        .catch(function(err) {
          console.log(err)
        });
    }
  },
  data() {
    return {
      cards: []
    }
  }
}
</script>

<style>
#card_group {
  width: 70%;
  margin: 1% auto 0;
}
</style>
