<script lang="ts">
  let currentUnixTime = $state(Math.floor(Date.now() / 1000));
  let timeInFuture = $state(1705366800);
  let interval: any;

  const secondsToDhms = (seconds: number) => {
    seconds = Number(seconds);
    var d = Math.floor(seconds / (3600 * 24));
    var h = Math.floor((seconds % (3600 * 24)) / 3600);
    var m = Math.floor((seconds % 3600) / 60);
    var s = Math.floor(seconds % 60);

    var dDisplay = d > 0 ? d + (d == 1 ? " day, " : " days, ") : "";
    var hDisplay = h > 0 ? h + (h == 1 ? " hour, " : " hours, ") : "";
    var mDisplay = m > 0 ? m + (m == 1 ? " minute, " : " minutes, ") : "";
    var sDisplay = s > 0 ? s + (s == 1 ? " second" : " seconds") : "0 seconds";
    return dDisplay + hDisplay + mDisplay + sDisplay;
  };

  $effect(() => {
    interval = setInterval(() => {
      currentUnixTime = Math.floor(Date.now() / 1000);
    }, 1000);

    return () => {
      console.log("cleanup!");
      clearInterval(interval);
    };
  });

  let timeDiff = $derived(timeInFuture - currentUnixTime);
  $inspect(timeDiff, "timeDiff");
</script>

<div>{secondsToDhms(timeDiff)}</div>

<style>
  div {
    font-size: 2rem;
    font-weight: bold;
    text-align: center;
    margin-top: 2rem;
  }
</style>
