export const config = {
  navEntryModule: '@/types/navigation',
  notesRoot: 'src/seeds/Notes',

  sectionNameMap: {
    'Front End': 'FrontEnd',
    'Back End': 'BackEnd',
    'GraphQL & Apollo': 'GraphQLAndApollo',
    'Cloud & Deploy': 'CloudAndDeployment',
    'Languages': 'Languages',
    'Testing': 'Testing',
    'Tools': 'Tools',
    'Stacks': 'Stacks',
  } as Record<string, string>,

  topicNameMap: {
    // 'IDS & IPS': 'IDSIPS',
  } as Record<string, string>,

  // NEW: override folder names for “group crumbs” (folders between Topic and leaf)
  groupFolderNameMap: {
    'Services/Dependency Injection': 'Services',
    'Authentication & Authorization': 'AuthenticationAuthorization',
    'Structure': 'ProjectStructure',
  } as Record<string, string>,

  defaultLimit: 10_000,
};