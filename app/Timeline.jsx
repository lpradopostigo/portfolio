import { Index } from "solid-js";

export default function Timeline(props) {
  return (
    <div class="timeline">
      <div class="timeline__line"></div>

      <div>
        <Index each={props.data}>
          {(item) => (
            <div class="timeline__item">
              <h3>{item().title}</h3>
              <div class="text-body-2">{item().date}</div>
              {item().description}
            </div>
          )}
        </Index>
      </div>
    </div>
  );
}
