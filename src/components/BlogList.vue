<template>
  <div id="card_group">
    <b-card-group columns>
      <b-card v-for="(m_card, index) in cards"
                :key="index"
                :title="m_card.card_title"
                :img-src="m_card.card_img"
                img-fluid
                img-alt="image"
                img-top>
        <p class="card-text">{{ m_card.card_text }}</p>
        <router-link :to="'/article/' + m_card.card_title" tag="a">阅读全文</router-link>
        <div slot="footer">
          <small class="text-muted">最后更新：{{ m_card.data }}</small>
        </div>
      </b-card>
    </b-card-group>
  </div>
</template>

<script>
export default {
  name: 'BlogList',
  data() {
    return {
      cards: [
        {
          data: '2018.6.2 19:00',
          card_title: '1234',
          card_img: 'https://placekitten.com/g/400/100',
          card_text: '1234'
        },{
          data: '2018.6.2 19:00',
          card_title: '1234',
          card_img: 'https://placekitten.com/g/400/100',
          card_text: '1234'
        },{
          data: '2018.6.2 19:00',
          card_title: '1234',
          card_img: 'https://placekitten.com/g/400/100',
          card_text: '1234'
        }
      ]
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
