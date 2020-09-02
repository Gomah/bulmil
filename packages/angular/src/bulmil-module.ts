import { NgModule } from '@angular/core';
import { defineCustomElements } from '@bulmil/core/dist/loader';

import * as Components from './directives/proxies';

const BmComponents = [
  Components.BmBadge,
  Components.BmBox,
  Components.BmBreadcrumb,
  Components.BmButton,
  Components.BmButtons,
  Components.BmCard,
  Components.BmCardContent,
  Components.BmCardFooter,
  Components.BmCardHeader,
  Components.BmCardImage,
  Components.BmCheckbox,
  Components.BmColumn,
  Components.BmColumns,
  Components.BmContainer,
  Components.BmContent,
  Components.BmDivider,
  Components.BmDropdown,
  Components.BmField,
  Components.BmFile,
  Components.BmFooter,
  Components.BmIcon,
  Components.BmImage,
  Components.BmInput,
  Components.BmMenu,
  Components.BmMessage,
  Components.BmModal,
  Components.BmNavbar,
  Components.BmNotification,
  Components.BmPagination,
  Components.BmPanel,
  Components.BmProgress,
  Components.BmRadio,
  Components.BmSection,
  Components.BmSelect,
  Components.BmSlider,
  Components.BmSwitch,
  Components.BmTable,
  Components.BmTabs,
  Components.BmTag,
  Components.BmTags,
  Components.BmTextarea,
];

defineCustomElements();

const DECLARATIONS = [
  // proxies
  ...BmComponents,
];

@NgModule({
  declarations: DECLARATIONS,
  exports: DECLARATIONS,
  imports: [],
  providers: [],
})
export class BulmilModule {}
