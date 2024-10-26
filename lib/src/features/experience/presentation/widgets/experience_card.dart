import 'package:flutter/material.dart';
import 'package:flutter_html/flutter_html.dart';
import 'package:flutter_riverpod/flutter_riverpod.dart';
import 'package:portfolio/src/common_widgets/app_text.dart';
import 'package:portfolio/src/common_widgets/link.dart';
import 'package:portfolio/src/common_widgets/responsive.dart';
import 'package:portfolio/src/common_widgets/technology_chip.dart';
import 'package:portfolio/src/constants/sizes.dart';
import 'package:portfolio/src/features/experience/domain/experience.dart';

class ExperienceCard extends ConsumerWidget {
  const ExperienceCard({required this.experience, super.key});

  final Experience experience;

  @override
  Widget build(BuildContext context, WidgetRef ref) {
    return Material(
      color: Theme.of(context).colorScheme.tertiary.withAlpha(20),
      borderRadius: BorderRadius.circular(20),
      child: InkWell(
        onTap: () {},
        borderRadius: BorderRadius.circular(20),
        hoverColor: Theme.of(context).colorScheme.tertiary.withAlpha(40),
        splashColor: Theme.of(context).colorScheme.tertiary.withAlpha(30),
        highlightColor: Theme.of(context).colorScheme.tertiary.withAlpha(20),
        child: MouseRegion(
          cursor: SystemMouseCursors.basic,
          child: Padding(
            padding: const EdgeInsets.all(12),
            child: Column(
              crossAxisAlignment: CrossAxisAlignment.start,
              children: [
                Row(
                  mainAxisAlignment: MainAxisAlignment.spaceBetween,
                  children: [
                    Flexible(
                      child: AppText(
                        experience.job,
                        style: Theme.of(context)
                            .textTheme
                            .titleMedium
                            ?.copyWith(fontWeight: FontWeight.bold),
                      ),
                    ),
                    gapW24,
                    if (!Responsive.isMobile(context))
                      AppText(
                        '${experience.startDate} - ${experience.endDate}',
                        style: Theme.of(context).textTheme.bodyMedium,
                      ),
                  ],
                ),
                if (Responsive.isMobile(context))
                  Column(
                    crossAxisAlignment: CrossAxisAlignment.start,
                    children: [
                      AppText(
                        experience.company,
                        style:
                            Theme.of(context).textTheme.titleMedium?.copyWith(
                                  color: Theme.of(context)
                                      .colorScheme
                                      .secondaryContainer,
                                ),
                      ),
                      gapH4,
                      AppText(
                        '${experience.startDate} - ${experience.endDate}',
                        style: Theme.of(context).textTheme.bodyMedium,
                      ),
                    ],
                  )
                else
                  AppText(
                    experience.company,
                    style: Theme.of(context).textTheme.titleMedium?.copyWith(
                          color:
                              Theme.of(context).colorScheme.secondaryContainer,
                        ),
                  ),
                gapH8,
                Row(
                  children: [
                    Expanded(
                      child: Html(
                        data: experience.description,
                      ),
                    ),
                  ],
                ),
                gapH12,
                Column(
                  crossAxisAlignment: CrossAxisAlignment.start,
                  children: [
                    _buildLinks(context),
                    if (experience.url != null) gapH12 else gapH4,
                    _buildChips(context),
                  ],
                ),
              ],
            ),
          ),
        ),
      ),
    );
  }

  Widget _buildChips(BuildContext context) {
    if (experience.technologies == null) return const SizedBox.shrink();
    return Wrap(
      spacing: 8,
      runSpacing: 8,
      children: experience.technologies!.map((technology) {
        return IgnorePointer(
          child: TechnologyChip(name: technology),
        );
      }).toList(),
    );
  }

  Widget _buildLinks(BuildContext context) {
    if (experience.url == null) return const SizedBox.shrink();
    return Link(
      url: experience.url!,
      displayLeadingIcon: true,
    );
  }
}
