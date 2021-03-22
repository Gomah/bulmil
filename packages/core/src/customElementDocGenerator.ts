/**
 * Stencil Doc Outputs don't seem to support custom-elements.json as suggested
 * here: https://github.com/w3c/webcomponents/issues/776#issuecomment-536749457.
 * This generator implements this standard, which is used by Storybook to display
 * documentation.
 * Thanks to @jagreehal https://github.com/jagreehal/stencil-boilerplate/blob/master/src/customElementDocGenerator.ts
 */

function isOutputTargetCustomElementDocsJson(o) {
  return o.name === 'custom-element-docs';
}

export async function writeDocsOutput(compilerCtx, jsonContent: string, root: string) {
  return compilerCtx.fs.writeFile(`${root}/dist/docs/custom-elements.json`, jsonContent);
}

export async function generateJsonDocs(config, compilerCtx, _buildCtx, docsData): Promise<any> {
  const jsonOutputTargets = config.outputTargets.filter(isOutputTargetCustomElementDocsJson);
  const { components, ...docsDataWithoutComponents } = docsData;
  const json = {
    ...docsDataWithoutComponents,
    tags: components.map((cmp) => ({
      filePath: cmp.filePath,
      encapsulation: cmp.encapsulation,
      tag: cmp.tag,
      name: cmp.tag,
      readme: cmp.readme,
      description: cmp.docs,
      docsTags: cmp.docsTags,
      usage: cmp.usage,
      properties: cmp.props.map((prop) => ({
        ...prop,
        description: prop.docs,
      })),
      attributes: cmp.props.map((prop) => ({
        ...prop,
        name: prop.attr,
        description: prop.docs,
      })),
      methods: cmp.methods,
      events: cmp.events.map((e) => ({
        ...e,
        name: e.event,
        description: e.docs,
        type: e.detail,
      })),
      styles: cmp.styles,
      slots: cmp.slots,
      dependents: cmp.dependents,
      dependencies: cmp.dependencies,
      dependencyGraph: cmp.dependencyGraph,
      deprecation: cmp.deprecation,
    })),
  };
  const jsonContent = JSON.stringify(json, null, 2);
  await Promise.all(
    jsonOutputTargets.map(() => {
      return writeDocsOutput(compilerCtx, jsonContent, config.rootDir);
    })
  );
}
