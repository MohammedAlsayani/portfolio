import 'package:flutter_gen/gen_l10n/app_localizations.dart';
import 'package:portfolio/src/features/experience/domain/experience.dart';
import 'package:portfolio/src/localization/app_localizations_provider.dart';
import 'package:riverpod_annotation/riverpod_annotation.dart';

part 'experience_repository.g.dart';

@riverpod
ExperienceRepository experienceRepository(ExperienceRepositoryRef ref) {
  final appLocalizations = ref.watch(appLocalizationsProvider);
  return ExperienceRepository(appLocalizations);
}

class ExperienceRepository {
  ExperienceRepository(this._appLocalizations);

  final AppLocalizations _appLocalizations;

  List<Experience> fetchExperiences() {
    return [
      Experience(
        startDate: 'June 2024',
        endDate: 'Present',
        job: _appLocalizations.kayanDevJobTitle,
        company: 'Kayan Intelligence, Jeddah',
        description: _appLocalizations.kayanDevJobDescription,
        technologies: [
          'Flutter',
          'Dart',
          'GetX',
          'Firebase',
          'RESTful APIs',
          'Git/GitHub',
          'CI/CD',
          'Google Cloud Platform (GCP)',
          'Agile Methodologies',
          'Testing & Debugging Tools',
          'GitHub Actions',
          'Unit Testing & Widget Testing',
          'Google Maps API',
          'Payment Gateway Integration',
        ],
      ),
      Experience(
        startDate: 'Jan. 2024',
        endDate: 'June 2024',
        job: _appLocalizations.amrtmDevJobTitle,
        company: 'Amrtm Company for Business Sector Services, Jeddah',
        description: _appLocalizations.amrtmDevJobDescription,
        technologies: [
          'Flutter',
          'Dart',
          'GetX',
          'Firebase',
          'RESTful APIs',
          'Git/GitHub',
          'CI/CD',
          'Firebase Authentication',
          'Google Maps API',
          'SQLite',
          'Location Services',
          'Testing & Debugging Tools',
          'GitHub Actions',
        ],
      ),
      Experience(
        startDate: 'Jan. 2021',
        endDate: 'Jan. 2024',
        job: _appLocalizations.freelanceDevJobTitle,
        company: 'Freelance',
        description: _appLocalizations.freelanceDevJobDescription,
        technologies: [
          'Flutter',
          'Dart',
          'GetX',
          'Riverpod',
          'Provider',
          'Bloc/Cubit',
          'Android Native',
          'iOS Native',
          'WebSockets',
          'Firebase',
          'MySQL',
          'Git/GitHub',
          'Firebase Firestore',
          'RESTful APIs',
          'CI/CD',
          'OAuth2 Authentication',
          'Payment Integration',
          'Agile Methodologies',
          'Unit Testing & Widget Testing',
          'Cloud Firestore',
          'Firestore Database',
        ],
      ),
    ];
  }
}
