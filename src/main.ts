import "@/assets/stlye.css";
import "@/assets/tailwind.css";

import { createApp } from "vue";
import type { App as VueApp } from 'vue';
import App from "./App.vue";

import Aura from "@primevue/themes/aura";
import PrimeVue from "primevue/config";
import ConfirmationService from "primevue/confirmationservice";
import ToastService from "primevue/toastservice";
import Breadcrumb from "primevue/breadcrumb";
import DataTable from "primevue/datatable";
import Column from "primevue/column";
import Button from "primevue/button";
import InputText from "primevue/inputtext";
import InputGroup from "primevue/inputgroup";
import Menu from "primevue/menu";
import Checkbox from 'primevue/checkbox';
import Password from 'primevue/password';
import StyleClass from 'primevue/styleclass';
import SelectButton from "primevue/selectbutton";
import router from "./Router";
import ConfirmDialog from 'primevue/confirmdialog';
import Toast from 'primevue/toast';
import Chart from 'primevue/chart'; 
import Paginator from "primevue/paginator";
import Tag from "primevue/tag";
import ProgressSpinner from "primevue/progressspinner";
import Panel from "primevue/panel";
import InputGroupAddon from "primevue/inputgroupaddon";
import DatePicker from "primevue/datepicker";
import Select from "primevue/select";
import Menubar from "primevue/menubar";
import Card from "primevue/card";
import Tabs from "primevue/tabs";
import Tab from "primevue/tab";
import TabPanel from "primevue/tabpanel";
import TabPanels from "primevue/tabpanels";
import TabList from "primevue/tablist";

const app: VueApp = createApp(App);

app.use(router);
app.use(PrimeVue, {
  theme: {
    preset: Aura,
    options: {
      darkModeSelector: ".app-dark",
    },
  },
});
app.directive('styleclass', StyleClass);
app.use(ToastService);
app.use(ConfirmationService);

// Register PrimeVue components
const components = {
  InputGroup,
  Menu,
  InputText,
  Button,
  Column,
  DataTable,
  Breadcrumb,
  Checkbox,
  Password,
  SelectButton,
  ConfirmDialog,
  Toast,
  Chart,
  Paginator,
  Tag,
  ProgressSpinner,
  Panel,
  InputGroupAddon,
  DatePicker,
  Select,
  Menubar,
  Card,
  Tabs,
  TabPanel,
  TabPanels,
  TabList,
  Tab
};

Object.entries(components).forEach(([name, component]) => {
  app.component(name, component);
});

app.mount("#app");
