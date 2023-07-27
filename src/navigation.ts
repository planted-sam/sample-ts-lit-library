import {LitElement, html, css} from "lit";
import {customElement, property} from "lit/decorators.js";

export enum Software {
    ProjectManager = "Project Manager",
    PartsManager = "Parts Manager"
}

@customElement("custom-navigation")
export class CustomNavigation extends LitElement {
    static override styles = css`
    .header {
        padding: 0.625rem 1.25rem;
        margin-bottom: 10px;
        background-color: var(--primary-color);
        color: white;
        box-shadow: 0 2px 5px rgb(0 0 0 / 0.2);
        font-size: 1rem;
        font-weight: bold;
        display: flex;
        justify-content: space-between;
        align-items: center;
        font-family: 'IBM Plex Mono', monospace;
      }
    `;

    @property({type: Software})
        currentApp = Software.ProjectManager;

    override render() {
        return html`
            <div class="header">
                <div>${this.currentApp}</div>
                <slot></slot>
            </div>
        `;
    }
}

declare global {
  interface HTMLElementTagNameMap {
    "custom-navigation": CustomNavigation;
  }
}