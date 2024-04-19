import colors from 'picocolors';
import chokidar from 'chokidar';

/**
 * Small plugin that watches for file changes and informs Vite to reload
 * once the change has been made.
 *
 * @param watchedFiles - List of files or directories to watch - use mask
 */
export const externalFileWatch = (watchFilesMask: readonly string[]) => ({
  name: 'internal-live-reload',

  configureServer({ ws, config }) {
    /**
     * Inform Vite server that a change has happened and trigger a full reload
     *
     * @param path - Path where the change has happened
     */
    const fileChanged = (path: string) => {
      console.info(`${colors.magenta(`File changed`)} ${colors.gray(path)}`);
      ws.send({ type: 'full-reload', path });
    };

    /**
     * Chokidar is already used by Vite for watching we will just add new paths to watch
     */
    chokidar
      .watch(watchFilesMask, { cwd: config.root, ignoreInitial: true, ...config })
      .on('change', fileChanged)
      .on('add', fileChanged);
  },
});
