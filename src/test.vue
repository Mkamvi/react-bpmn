<template>
  <div>
    <bpmn-modeler
      ref="refNode"
      :xml="xml"
      :users="users"
      :groups="groups"
      :categorys="categorys"
      :is-view="false"
      @save="save"
    />
    {{time}}
  </div>
</template>

<script>
import bpmnModeler from "workflow-bpmn-modeler";
import testXml from './test.xml?raw';

export default {
  components: {
    bpmnModeler,
  },
  data() {
    return {
      xml: '' , // Query the xml
      users: [
        { name: "The Beatles", id: "1" },
        { name: "The Rolling Stones", id: "2" },
        { name: "Pink Floyed", id: "3" },
      ],
      groups: [
        { name: "Folk Music", id: "4" },
        { name: "Rock Music", id: "5" },
        { name: "Classical Music", id: "6" },
      ],
      categorys: [
        { name: "Music", id: "7" },
        { name: "Articles", id: "8" },
      ],
      time: Date.now(),
    };
  },
  mounted() {
    setTimeout(() => {
      this.xml = testXml;
      this.time = Date.now();
    }, 3000)
  },
  methods: {
    getModelDetail() {
      // Send request to get xml
      // this.xml = response.xml
    },
    save(data) {
      console.log(data);  // { process: {...}, xml: '...', svg: '...' }
    },
  },
};
</script>
