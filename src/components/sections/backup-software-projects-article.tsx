import { For } from 'solid-js';
import Markdown from '~/components/parsers/markdown.tsx';
import { Href } from '~/components/routing/Href.tsx';
import type { ProgrammingResponse } from '~/lib/types.ts';

const projects: ProgrammingResponse[] = [
  {
    title: 'Blender Development for Pycharm',
    description: `**Blender Development** is a plugin originally developed for PyCharm. The original idea is based on the [Blender Development](https://github.com/JacquesLucke/blender_vscode) extension by Jacques Lucke for Visual Studio Code, of which my plugin's core Python runtime is forked from. The plugin is developed in Kotlin, and is heavily integrated into the Intellij Platform SDK, granting it more advanced and integrated features including:

- Managed Blender Installs
- Access to Pycharm's advanced debugging tools
- Python Intellisense Stub installations

The plugin is currently at version 1.0.0 Beta 3, with the main development being focused on refinement and security in preparation for a full 1.0.0 release.`,
    projectPage:
      'https://www.sedaia-designs.org/projects/blender-development',
    sourceCode: 'https://gitlab.com/sedaia-designs/blender_pycharm',
    documentation: 'https://docs.blender-development.sakura-sedaia.tech/',
  },
  {
    title: 'Advanced Character Rig',
    description: `**Sakura Advanced Character Rig (SACR)** is a Blender rig and toolkit for creating Minecraft-style character renders. The project brings its independently released components together in one repository, including:

- Character rig releases, source assets, and supporting files
- Sakura Rig Utilities for rig and skin management workflows
- Reusable Blender scripts for specialized, one-off tasks

The rig is actively maintained across Blender versions, while Sakura Rig Utilities is in early development as the future home for discovering, downloading, and importing SACR rigs directly in Blender.`,
    projectPage:
      'https://www.sedaia-designs.org/projects/sakura-character-rig',
    sourceCode: 'https://gitlab.com/sedaia-designs/advanced-character-rig',
    documentation: 'https://docs.sakura-sedaia.com',
  },
];

function ProjectLink(props: { href: string; children: string }) {
  return (
    <div class={'project-link'}>
      <Href href={props.href}>{props.children}</Href>
    </div>
  );
}

export default function BackupSoftwareProjectsArticle() {
  return (
    <article id={'software-projects'}>
      <h2>Software Projects</h2>
      <p>
        A collection of technical achievements in software engineering, custom
        tooling, and workflow automation designed to solve real-world pipeline
        challenges and provide practical utility to designers and developers.
      </p>

      <For each={projects}>
        {(project) => (
          <div class={'project-container'}>
            <h3>{project.title}</h3>
            <div class={'router left'}>
              <ProjectLink href={project.projectPage}>Project Page</ProjectLink>
              <ProjectLink href={project.sourceCode}>Source</ProjectLink>
              <ProjectLink href={project.documentation ?? ''}>
                Documentation
              </ProjectLink>
            </div>

            <Markdown content={project.description} />
          </div>
        )}
      </For>
    </article>
  );
}
