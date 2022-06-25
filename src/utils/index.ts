import downloadGit from 'download-git-repo';

/**
 * Download template from remote
 *
 * @param {*} repo
 * @param {*} dest
 * @returns
 */
export async function downloadTemplate(repo, dest) {
  return new Promise((resolve, reject) => {
    downloadGit(repo, dest, { clone: true }, err => {
      if (err) {
        reject(err);
      } else {
        resolve();
      }
    });
  });
}

console.log('~~~ downloadTemplate', downloadTemplate);
