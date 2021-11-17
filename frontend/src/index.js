
import { parseRequestUrl, $ } from './utils';
import Routers from './Routers'
const router = async () => {
  const { resource, id } = parseRequestUrl();
  const a = (resource ? `/${resource}` : '/') + (id ? `/:id` : '');
  console.log(a);
  const page = Routers[a] ? Routers[a] : "Error Page";

  $("#main-content").innerHTML = await page.render();
  if (page.afterRender) {
    await page.afterRender();
    
  }
  if(page.ListProduct){
    await page.ListProduct();
  }
  if(page.searchProduct){
    await page.searchProduct();
  }
}
window.addEventListener('DOMContentLoaded', router);
window.addEventListener('hashchange', router);
