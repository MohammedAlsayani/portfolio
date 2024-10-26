import 'package:flutter_gen/gen_l10n/app_localizations.dart';
import 'package:portfolio/src/features/project/domain/project.dart';
import 'package:portfolio/src/localization/app_localizations_provider.dart';
import 'package:riverpod_annotation/riverpod_annotation.dart';

part 'project_repository.g.dart';

@riverpod
ProjectRepository projectRepository(ProjectRepositoryRef ref) {
  final appLocalizations = ref.watch(appLocalizationsProvider);
  return ProjectRepository(appLocalizations);
}

class ProjectRepository {
  ProjectRepository(this._appLocalizations);

  final AppLocalizations _appLocalizations;

  List<Project> fetchProjects() {
    return [
     
      Project(
        title: 'Bzzz',
        description: _appLocalizations.bzzzProjectDescription,
        technologies: [
          'Flutter',
          'Dart',
          'GetX',
          'Clean Architecture',
          'Firebase',
          'RESTful APIs',
          'In-App Purchases',
          'Camera Access',
          'Microphone Access',
          'Video Editing',
          'Git',
        ],
        url: 'https://play.google.com/store/apps/details?id=com.itqan.bzzz', 
        asset: 'assets/projects/bzz.jpg',
      ),
            Project(
        title: 'TinderFood',
        description: _appLocalizations.tinderFoodProjectDescription,
        technologies: [
          'Flutter',
          'Dart',
          'Clean Architecture',
          'Firebase',
          'RESTful APIs',
          'Location Services',
          'Chat Integration',
          'Payment Gateway Integration',
          'Git',
        ],
        url: 'https://www.figma.com/proto/MQlpCjy6gXxON67vfM2L1B/TinderFood?node-id=7-17592&node-type=canvas&t=NeTBWMqZgNKhXnNe-0&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1', // Update with the actual URL if available
        asset: 'assets/projects/tinderfood.png',
      ),
      
      Project(
        title: 'Ashghal App',
        description: _appLocalizations.ashghalProjectDescription,
        technologies: [
          'Flutter',
          'Dart',
          'GetX',
          'Clean Architecture',
          'Firebase',
          'Role-Based Access Control',
          'Geolocation Services',
          'Git',
        ],
        url: 'https://play.google.com/store/apps/details?id=com.ashghal.app', 
        asset: 'assets/projects/ashghal.png',
      ),
 Project(
        title: 'Portfolio',
        description: _appLocalizations.portfolioDescription,
        technologies: [
          'Flutter',
          'Dart',
          'Clean Architecture',
          'Riverpod',
          'Responsive Design',
          'Localization',
          'Git',
        ],
        url: 'https://github.com', // Replace with your actual GitHub URL
        asset: 'assets/projects/portfolio.png',
      ),
    ];
  }
}
