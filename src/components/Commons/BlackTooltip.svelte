<script lang="ts">
  export let title: string, descHead: string, descBody: string, pos: string;
</script>

<div id="tooltip" role="tooltip">
  title: #{title}, descHead: #{descHead}, descBody: #{descBody}, pos: #{pos}
  <div id="arrow" data-popper-arrow />
</div>

<style>
  #tooltip {
    background: #333;
    color: white;
    font-weight: bold;
    padding: 4px 8px;
    font-size: 13px;
    border-radius: 4px;
  }

  #arrow,
  #arrow::before {
    position: absolute;
    width: 8px;
    height: 8px;
    z-index: -1;
  }

  #arrow::before {
    content: "";
    transform: rotate(45deg);
    background: #333;
  }

  :global(#tooltip[data-popper-placement^="bottom"] > #arrow) {
    top: -4px;
  }

  :global(#tooltip[data-popper-placement^="top"] > #arrow) {
    bottom: -4px;
  }

  :global(#tooltip[data-popper-placement^="left"] > #arrow) {
    right: -4px;
  }

  :global(#tooltip[data-popper-placement^="right"] > #arrow) {
    left: -4px;
  }
</style>
