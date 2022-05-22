function temp() {
  let data = fetch(
    `https://dwd.api.proxy.bund.dev/v30/stationOverviewExtended?stationIds=10865,G005`
  )
    .then((response) => response.text())
    .then((data) => console.log(data));
  return data;
}
temp();
