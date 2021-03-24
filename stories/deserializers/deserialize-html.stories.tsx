import React from 'react';
import {
  getSlatePluginsComponents,
  getSlatePluginsOptions,
  SlatePlugins,
  useBasicElementPlugins,
  useBasicMarkPlugins,
  useDeserializeHTMLPlugin,
  useHighlightPlugin,
  useHistoryPlugin,
  useImagePlugin,
  useLinkPlugin,
  useListPlugin,
  useMediaEmbedPlugin,
  useMentionPlugin,
  useReactPlugin,
  useSoftBreakPlugin,
  useTablePlugin,
  useTodoListPlugin,
} from '@udecode/slate-plugins';
import { initialValuePasteHtml } from '../config/initialValues';
import { editableProps, optionsSoftBreakPlugin } from '../config/pluginOptions';

const id = 'Deserializers/HTML';

export default {
  title: id,
};

const components = getSlatePluginsComponents();
const options = getSlatePluginsOptions();

export const Example = () => {
  const plugins = [
    useReactPlugin(),
    useHistoryPlugin(),
    ...useBasicElementPlugins(),
    ...useBasicMarkPlugins(),
    useImagePlugin(),
    useLinkPlugin(),
    useListPlugin(),
    useTablePlugin(),
    useTodoListPlugin(),
    useMentionPlugin(),
    useMediaEmbedPlugin(),
    useHighlightPlugin(),
    useSoftBreakPlugin(optionsSoftBreakPlugin),
  ];

  plugins.push(useDeserializeHTMLPlugin({ plugins }));

  return (
    <SlatePlugins
      id={id}
      plugins={plugins}
      components={components}
      options={options}
      editableProps={editableProps}
      initialValue={initialValuePasteHtml}
    />
  );
};