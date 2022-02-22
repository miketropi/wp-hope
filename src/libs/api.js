import apiFetch from '@wordpress/api-fetch';

export async function getPages() {
  return await apiFetch({path: '/wp-json/wp/v2/pages'});
}